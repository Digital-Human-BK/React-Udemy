import React, { useState, useEffect, useRef } from 'react';
import useHTTP from '../../hooks/http';

import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import './Search.css';

const Search = React.memo((props) => {
  const inputRef = useRef();
  const [query, setQuery] = useState('');
  const { onSearch } = props;
  const { isLoading, data, error, sendRequest, clear } = useHTTP();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query === inputRef.current.value && query !== '') {
        const searchQuery =
          query.length === 0 ? '' : `?orderBy="title"&equalTo="${query}"`;

        sendRequest(
          'https://react-hooks-59fe0-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json' +
            searchQuery,
          'GET'
        );
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query, sendRequest, inputRef]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const loadedIngredients = [];
      for (const key in data) {
        loadedIngredients.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
        });
      }
      onSearch(loadedIngredients);
    }
  }, [data, isLoading, error, onSearch]);
  return (
    <section className='search'>
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
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
