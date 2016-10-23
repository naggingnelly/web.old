import reduxApi, { transformers } from 'redux-api';
import adapterFetch from 'redux-api/lib/adapters/fetch';

export default reduxApi({
  entry: '/api/v1/entry/:id',
  actions: {
    url: 'http://localhost:8000/gtd/actions/',
    transformer: transformers.array,
    options: {
      credentials: 'include',
      headers: {
        Accept: 'application/json',
      },
    },
  },
}).use('fetch', adapterFetch(fetch));
