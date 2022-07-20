import { configureStore } from '@reduxjs/toolkit';
// import { createStore } from "redux"

import rootReducer from './reducers';

const store = configureStore<object>({
    reducer: rootReducer,
  });

export default store;
