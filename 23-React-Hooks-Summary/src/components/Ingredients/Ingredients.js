import React, { useCallback, useEffect, useReducer } from 'react';
import ErrorModal from '../UI/ErrorModal';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const ingredientsReducer = (ingredientsState, action) => {
  if (action.type === 'SET') {
    return action.ingredients;
  }
  if (action.type === 'ADD') {
    return [...ingredientsState, action.ingredient];
  }
  if (action.type === 'DELETE') {
    return ingredientsState.filter((ing) => ing.id !== action.id);
  }
  throw new Error('Should not get there!');
};

const httpReducer = (httpState, action) => {
  if (action.type === 'SEND') {
    return { loading: true, error: null };
  }
  if (action.type === 'RESPONSE') {
    return { ...httpState, loading: false };
  }
  if (action.type === 'ERROR') {
    return { loading: false, error: action.errorMessage };
  }
  if (action.type === 'CLEAR') {
    return { ...httpState, error: null };
  }
  throw new Error('Should not get there!');
};

function Ingredients() {
  // const [ingredients, setIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [ingredients, dispatch] = useReducer(ingredientsReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null,
  });

  useEffect(() => {
    fetch(
      'https://react-hooks-59fe0-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        const loadedIngredients = [];
        for (const key in responseData) {
          loadedIngredients.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount,
          });
        }
        // setIngredients(loadedIngredients);
        dispatch({ type: 'SET', ingredients: loadedIngredients });
      });
  }, []);

  useEffect(() => {
    console.log('Rendering component', ingredients);
  }, [ingredients]);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    dispatch({ type: 'SET', ingredients: filteredIngredients });
  }, []);

  const addIngredientHandler = (newIngredient) => {
    // setIsLoading(true);
    dispatchHttp({ type: 'SEND' });
    fetch(
      'https://react-hooks-59fe0-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newIngredient),
      }
    )
      .then((response) => {
        // setIsLoading(false);
        dispatchHttp({ type: 'RESPONSE' });
        return response.json();
      })
      .then((responseData) => {
        dispatch({
          type: 'ADD',
          ingredient: { id: responseData.name, ...newIngredient },
        });
        // setIngredients((prevIng) => [
        //   ...prevIng,
        //   {
        //     id: responseData.name,
        //     ...newIngredient,
        //   },
        // ]);
      })
      .catch((err) => {
        dispatchHttp({ type: 'ERROR', errorMessage: err.message });
        // setError(err.message);
        // setIsLoading(false);
      });
  };

  const removeIngredientHandler = (id) => {
    // setIsLoading(true);
    dispatchHttp({ type: 'SEND' });
    fetch(
      `https://react-hooks-59fe0-default-rtdb.europe-west1.firebasedatabase.app/ingredients/${id}.json`,
      {
        method: 'DELETE',
      }
    )
      .then((response) => {
        // setIsLoading(false);
        dispatchHttp({ type: 'RESPONSE' });
        dispatch({ type: 'DELETE', id });
        // setIngredients((prevIngredients) =>
        //   prevIngredients.filter((ing) => ing.id !== id)
        // );
      })
      .catch((err) => {
        dispatchHttp({ type: 'ERROR', errorMessage: err.message });
      });
  };

  const clearError = () => {
    // setError(null);
    dispatchHttp({ type: 'CLEAR' });
  };

  return (
    <div className='App'>
      {httpState.error && (
        <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>
      )}

      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={httpState.loading}
      />

      <section>
        <Search onSearch={filteredIngredientsHandler} />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
