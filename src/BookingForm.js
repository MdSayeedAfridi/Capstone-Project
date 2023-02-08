import React, { useState, useEffect } from 'react';

function BookingForm({ availableTimes, dispatch, initializeTimes }) {
const [date, setDate] = useState('');
const [time, setTime] = useState('');
const [errors, setErrors] = useState({ date: '', time: '' });
const [isFormValid, setIsFormValid] = useState(false);

useEffect(() => {
const formValid = date !== '' && time !== '' && errors.date === '' && errors.time === '';
setIsFormValid(formValid);
}, [date, time, errors]);

const handleDateChange = e => {
setDate(e.target.value);
const updatedTimes = initializeTimes(e.target.value);
dispatch({ type: 'UPDATE', payload: updatedTimes });
if (!e.target.value) {
    setErrors({ ...errors, date: 'Date is required' });
  } else {
    setErrors({ ...errors, date: '' });
  }
};

const handleTimeChange = e => {
setTime(e.target.value);
if (!e.target.value) {
setErrors({ ...errors, time: 'Time is required' });
} else {
setErrors({ ...errors, time: '' });
}
};

const handleSubmit = e => {
e.preventDefault();
if (isFormValid) {
// submit the form here
}
};

return (
<form onSubmit={handleSubmit} noValidate>
<div>
<label htmlFor="date" aria-label="Date">Date:</label>
<input
       type="date"
       id="date"
       onChange={handleDateChange}
       value={date}
       required
       aria-required="true"
       aria-invalid={!!errors.date}
     />
{errors.date && <span style={{ color: 'red' }}>{errors.date}</span>}
</div>
<div>
<label htmlFor="time" aria-label="Time">Time:</label>
<select id="time" onChange={handleTimeChange} value={time} required aria-required="true">
<option value="">Select a time</option>
{availableTimes.map(time => (
<option key={time} value={time}>
{time}
</option>
))}
</select>
{errors.time && <span style={{ color: 'red' }}>{errors.time}</span>}
</div>
<button type="submit" disabled={!isFormValid} aria-disabled={!isFormValid}>
Submit
</button>
</form>
);
}
