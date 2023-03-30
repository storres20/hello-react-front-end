import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greetings/greetings';

const store = configureStore({
  reducer: {
    greeting: greetingsReducer,
  },
});

export default store;
