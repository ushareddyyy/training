import React, { useState } from 'react';

function AppointmentForm({ doctor, timeSlot, bookAppointment }) {
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const appointmentDetails = {
      patientName,
      patientEmail,
      doctor,
      timeSlot,
    };
    bookAppointment(appointmentDetails);
    alert(`Your appointment with Dr. ${doctor.name} on ${timeSlot} has been successfully booked.`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Booking with Dr. {doctor.name} at {timeSlot}</h2>
      <label>
        Name:
        <input
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={patientEmail}
          onChange={(e) => setPatientEmail(e.target.value)}
          required
        />
      </label>
      <button type="submit">Confirm Appointment</button>
    </form>
  );
}

export default AppointmentForm;
