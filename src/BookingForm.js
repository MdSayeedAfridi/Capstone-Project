import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch, initializeTimes }) {
  const [date, setDate] = useState('');

  const handleDateChange = e => {
    setDate(e.target.value);
    const updatedTimes = initializeTimes(e.target.value);
    dispatch({ type: 'UPDATE', payload: updatedTimes });
  };

  return (
    <form>
      <div>
        <label>Date:</label>
        <input type="date" onChange={handleDateChange} />
      </div>
      <div>
        <label>Time:</label>
        <select>
          {availableTimes.map(time => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookingForm;
