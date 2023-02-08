import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

const initialState = {
  availableTimes: []
};

function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE':
      return {
        availableTimes: action.payload
      };
    default:
      return state;
  }
}

function initializeTimes(date) {
  // logic to fetch available times based on selected date
  const availableTimes = [
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00'
  ];

  return availableTimes;
}

function Main1() {
  const [state, dispatch] = useReducer(updateTimes, initialState);

  return (
    <div>
      <BookingForm
        availableTimes={state.availableTimes}
        dispatch={dispatch}
        initializeTimes={initializeTimes}
      />
    </div>
  );
}

export default Main1;
