import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingsPage = (props) => {
  const [times, setTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  const initializeTimes = () => {
    const today = new Date();
    setSelectedDate(today);
    const availableTimes = fetchAPI(today);
    setTimes(availableTimes);
  };

  const updateTimes = (date) => {
    setSelectedDate(date);
    const availableTimes = fetchAPI(date);
    setTimes(availableTimes);
  };

  useEffect(() => {
    initializeTimes();
  }, []);

  const handleSubmit = (formData) => {
    props.submitForm(formData);
  };

  return (
    <div>
      <h1>Bookings Page</h1>
      <form>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" value={selectedDate} onChange={(e) => updateTimes(e.target.value)} />
        <label htmlFor="time">Time:</label>
        <select id="time">
          {times.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <button type="submit" onClick={(e) => handleSubmit(e.target.formData)}>
          Submit
        </button>
      </form>
    </div>
  );
};

const Main2 = () => {
  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmed');
    } else {
      alert('Booking submission failed. Please try again.');
    }
  };

  return (
    <div>
      <BookingsPage submitForm={submitForm} />
    </div>
  );
};

export default Main2;
