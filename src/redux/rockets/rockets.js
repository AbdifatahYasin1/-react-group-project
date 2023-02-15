import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';

const RESERVEROCKET = createAction('rocket/RESERVEROCKET');
const CANCELROCKETRESERVATION = createAction('rocket/CANCELROCKETRESERVATION');
const FETCHROCKETS = 'rockets/fetchRockets';
const URL = 'https://api.spacexdata.com/v4/rockets';

export const fetchRockets = createAsyncThunk(FETCHROCKETS, async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return {
    id: data[0].id,
    name: data[0].name,
    type: data[0].type,
    images: data[0].flickr_images,
  };
});

const initialState = {
  rockets: [],
};

const rockets = createReducer(initialState, (builder) => {
  builder.addCase(fetchRockets.fulfilled, (state, { payload }) => ({
    ...state,
    rockets: payload,
  }));
  builder.addCase(RESERVEROCKET, (state, { payload }) => ({
    ...state,
    rockets: payload,
  }));
  builder.addCase(CANCELROCKETRESERVATION, (state, { payload }) => ({
    ...state,
    rockets: payload,
  }));
});

export default rockets;
