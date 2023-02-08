import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import BookingForm from './BookingForm';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("BookingForm");
    expect(headingElement).toBeInTheDocument();
});

const initialState = {
  availableTimes: []
};

const updatedState = {
  availableTimes: [1, 2, 3]
};

describe('BookingForm reducer functions', () => {
  it('initializeTimes returns the expected value', () => {
    const result = initializeTimes(initialState, updatedState);
    expect(result).toEqual(updatedState);
  });

  it('updateTimes returns the same value that is provided in the state', () => {
    const result = updateTimes(initialState, updatedState);
    expect(result).toEqual(updatedState);
  });
});
