import { useCallback, useReducer } from 'react';

const initialState = {
  loading: false,
  error: null,
  data: null,
  extra: null,
  identifier: null,
};

const httpReducer = (httpState, action) => {
  if (action.type === 'SEND') {
    return {
      loading: true,
      error: null,
      data: null,
      extra: null,
      identifier: action.identifier,
    };
  }
  if (action.type === 'RESPONSE') {
    return {
      ...httpState,
      loading: false,
      data: action.responseData,
      extra: action.extra,
    };
  }
  if (action.type === 'ERROR') {
    return { loading: false, error: action.errorMessage };
  }
  if (action.type === 'CLEAR') {
    return initialState;
  }
  throw new Error('Should not get there!');
};

const useHTTP = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);

  const clear = useCallback(() => {
    dispatchHttp({type: 'CLEAR'})
  }, [])

  const sendRequest = useCallback(
    (url, method, body, reqExtra, reqIdentifier) => {
      dispatchHttp({ type: 'SEND', identifier: reqIdentifier });
      fetch(url, {
        method: method,
        body: body,
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
          dispatchHttp({
            type: 'RESPONSE',
            responseData: responseData,
            extra: reqExtra,
          });
        })
        .catch((err) => {
          dispatchHttp({ type: 'ERROR', errorMessage: err.message });
        });
    },
    []
  );

  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    reqExtra: httpState.extra,
    reqIdentifier: httpState.identifier,
    sendRequest: sendRequest,
    clear: clear
  };
};

export default useHTTP;
