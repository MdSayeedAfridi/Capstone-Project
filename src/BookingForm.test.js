import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
    let dispatch;
    let initializeTimes;
    let availableTimes;

    beforeEach(() => {
        dispatch = jest.fn();
        initializeTimes = jest.fn(() => availableTimes);
        availableTimes = ['10:00 AM', '11:00 AM', '12:00 PM'];
    });

    it('renders the form with the correct HTML5 validation attributes', () => {
        const { getByLabelText } = render(
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                initializeTimes={initializeTimes}
            />
        );

        const dateInput = getByLabelText('Date:');
        expect(dateInput).toHaveAttribute('required');

        const timeSelect = getByLabelText('Time:');
        expect(timeSelect).toHaveAttribute('required');
    });

    it('displays error message if date is not provided', () => {
        const { getByText, getByLabelText } = render(
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                initializeTimes={initializeTimes}
            />
        );

        const dateInput = getByLabelText('Date:');
        fireEvent.change(dateInput, { target: { value: '' } });

        const errorMessage = getByText('Date is required');
        expect(errorMessage).toBeInTheDocument();
    });

    it('displays error message if time is not provided', () => {
        const { getByText, getByLabelText } = render(
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                initializeTimes={initializeTimes}
            />
        );

        const timeSelect = getByLabelText('Time:');
        fireEvent.change(timeSelect, { target: { value: '' } });

        const errorMessage = getByText('Time is required');
        expect(errorMessage).toBeInTheDocument();
    });

    it('does not display error message if date and time are provided', () => {
        const { queryByText, getByLabelText } = render(
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                initializeTimes={initializeTimes}
            />
        );

        const dateInput = getByLabelText('Date:');
        fireEvent.change(dateInput, { target: { value: '2023-02-08' } });

        const timeSelect = getByLabelText('Time:');
        fireEvent.change(timeSelect, { target: { value: '10:00 AM' } });

        errorMessage = queryByText('Date is required');
        expect(errorMessage).not.toBeInTheDocument();

        const errorMessage = queryByText('Time is required');
        expect(errorMessage).not.toBeInTheDocument();
    });

    it('disables the submit button if form is not valid', () => {
        const { getByText, getByLabelText } = render(
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                initializeTimes={initializeTimes}
            />
        );
        const dateInput = getByLabelText('Date:');
        fireEvent.change(dateInput, { target: { value: '' } });

        const submitButton = getByText('Submit');
        expect(submitButton).toBeDisabled();
    });

    it('enables the submit button if form is valid', () => {
        const { getByText, getByLabelText } = render(
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                initializeTimes={initializeTimes}
            />
        );
        const dateInput = getByLabelText('Date:');
        fireEvent.change(dateInput, { target: { value: '2023-02-08' } });

        const timeSelect = getByLabelText('Time:');
        fireEvent.change(timeSelect, { target: { value: '10:00 AM' } });

        const submitButton = getByText('Submit');
        expect(submitButton).toBeEnabled();
        it('disables the submit button if form is not valid', () => {
            const { getByText, getByLabelText } = render(
                <BookingForm
                    availableTimes={availableTimes}
                    dispatch={dispatch}
                    initializeTimes={initializeTimes}
                />
            );

            const dateInput = getByLabelText('Date:');
            fireEvent.change(dateInput, { target: { value: '' } });

            const submitButton = getByText('Submit');
            expect(submitButton).toBeDisabled();
        });

        it('enables the submit button if form is valid', () => {
            const { getByText, getByLabelText } = render(
                <BookingForm
                    availableTimes={availableTimes}
                    dispatch={dispatch}
                    initializeTimes={initializeTimes}
                />
            );


            const dateInput = getByLabelText('Date:');
            fireEvent.change(dateInput, { target: { value: '2023-02-08' } });

            const timeSelect = getByLabelText('Time:');
            fireEvent.change(timeSelect, { target: { value: '10:00 AM' } });

            const submitButton = getByText('Submit');
            expect(submitButton).toBeEnabled();
        });

        it('dispatches the correct action when form is submitted', () => {
            const { getByText, getByLabelText } = render(
                <BookingForm
                    availableTimes={availableTimes}
                    dispatch={dispatch}
                    initializeTimes={initializeTimes}
                />
            );
            const dateInput = getByLabelText('Date:');
            fireEvent.change(dateInput, { target: { value: '2023-02-08' } });

            const timeSelect = getByLabelText('Time:');
            fireEvent.change(timeSelect, { target: { value: '10:00 AM' } });

            const submitButton = getByText('Submit');
            fireEvent.click(submitButton);

            expect(dispatch).toHaveBeenCalledWith({
                type: 'BOOK_APPOINTMENT',
                date: '2023-02-08',
                time: '10:00 AM',
            });
        });
    });
})