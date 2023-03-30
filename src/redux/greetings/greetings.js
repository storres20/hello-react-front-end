// greetings.js
import { createAsyncThunk } from '@reduxjs/toolkit';

// Actions... types
const GET_GREETINGS = 'greetings-react/greetings/GET_GREETINGS';

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    // do reducer stuff
    // GET greetings from the API
    case `${GET_GREETINGS}/fulfilled`:
      return action.payload;
    default: return state;
  }
}

// Action Creators
export const getGreetings = createAsyncThunk(GET_GREETINGS, async () => {
  const getGreetingsUrl = 'http://127.0.0.1:4000/api/v1/greetings';
  const response = await fetch(getGreetingsUrl);
  const result = await response.json();
  return result.greeting;
}); /* getGreetings - createAsyncThunk - API */
