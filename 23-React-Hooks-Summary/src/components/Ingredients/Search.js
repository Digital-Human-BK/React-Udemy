import React, { useState, useEffect, useRef } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo((props) => {
  const inputRef = useRef();
  const [query, setQuery] = useState('');
  const { onSearch } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query === inputRef.current.value && query !== '') {
        const searchQuery =
          query.length === 0 ? '' : `?orderBy="title"&equalTo="${query}"`;

        fetch(
          'https://react-hooks-59fe0-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json' +
            searchQuery
        )
          .then((response) => response.json())
          .then((responseData) => {
            const loadedIngredients = [];
            for (const key in responseData) {
              loadedIngredients.push({
                id: key,
                title: responseData[key].title,
                amount: responseData[key].amount,
              });
            }
            console.log(loadedIngredients);
            onSearch(loadedIngredients);
          });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query, onSearch, inputRef]);
  return (
    <section className='search'>
      <Card>
        <div className='search-input'>
          <label>Filter by Title</label>
          <input
            ref={inputRef}
            type='text'
            value={query}
            onChange={(ev) => setQuery(ev.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
