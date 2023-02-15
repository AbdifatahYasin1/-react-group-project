import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit';

export const reserveRocket = createAction('rocket/RESERVEROCKET', (id) => ({
  payload: {
    id,
  },
}));

export const cancelRocketReservation = createAction('rocket/CANCELROCKETRESERVATION', (id) => ({
  payload: {
    id,
  },
}));

const FETCHROCKETS = 'rockets/fetchRockets';
const URL = 'https://api.spacexdata.com/v4/rockets';

export const fetchRockets = createAsyncThunk(FETCHROCKETS, async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
});

const initialState = {
  rockets: [],
};

const rockets = createReducer(initialState, (builder) => {
  builder.addCase(fetchRockets.fulfilled, (state, { payload }) => ({
    ...state,
    rockets: payload,
  }));
  builder.addCase(reserveRocket, (state, { payload }) => ({
    ...state,
    rockets: state.rockets.map((rocket) => {
      if (rocket.id !== payload.id) {
        return rocket;
      }
      return {
        ...rocket, reserved: true,
      };
    }),
  }));
  builder.addCase(cancelRocketReservation, (state, { payload }) => ({
    ...state,
    rockets: state.rockets.map((rocket) => {
      if (rocket.id !== payload.id) {
        return rocket;
      }
      return {
        ...rocket, reserved: false,
      };
    }),
  }));
});

export default rockets;
