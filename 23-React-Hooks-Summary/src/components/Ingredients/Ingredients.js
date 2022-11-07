import React, { useCallback, useEffect, useMemo, useReducer } from 'react';
import useHTTP from '../../hooks/http';
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

function Ingredients() {
  const [ingredients, dispatch] = useReducer(ingredientsReducer, []);
  const {
    data,
    isLoading,
    error,
    reqExtra,
    reqIdentifier,
    sendRequest,
    clear,
  } = useHTTP();

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
    if (!isLoading && reqIdentifier === 'REMOVE_DATA') {
      dispatch({ type: 'DELETE', id: reqExtra });
    }
    if (!isLoading && reqIdentifier === 'ADD_DATA') {
      dispatch({
        type: 'ADD',
        ingredient: { id: data.name, ...reqExtra },
      });
    }
  }, [data, reqExtra, reqIdentifier, isLoading]);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    dispatch({ type: 'SET', ingredients: filteredIngredients });
  }, []);

  const addIngredientHandler = useCallback(
    (newIngredient) => {
      sendRequest(
        'https://react-hooks-59fe0-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json',
        'POST',
        JSON.stringify(newIngredient),
        newIngredient,
        'ADD_DATA'
      );
    },
    [sendRequest]
  );

  const removeIngredientHandler = useCallback(
    (id) => {
      sendRequest(
        `https://react-hooks-59fe0-default-rtdb.europe-west1.firebasedatabase.app/ingredients/${id}.json`,
        'DELETE',
        null,
        id,
        'REMOVE_DATA'
      );
    },
    [sendRequest]
  );

  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={ingredients}
        onRemoveItem={removeIngredientHandler}
      />
    );
  }, [ingredients, removeIngredientHandler]);

  return (
    <div className='App'>
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}

      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

      <section>
        <Search onSearch={filteredIngredientsHandler} />
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
