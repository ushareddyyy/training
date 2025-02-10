import React from 'react';
import './DoctorList.css';

function DoctorList({ doctors, selectDoctor }) {
  return (
    <div className="doctor-list">
      {doctors.map((doctor) => (
        <div
          key={doctor.id}
          className="doctor-card"
          onClick={() => selectDoctor(doctor)}
        >
          <div className="image-container">
            <img src={doctor.image} alt={doctor.name} className="doctor-image" />
            <div className="overlay">
              <h3>Available Doctors</h3>
            </div>
          </div>
          <h3>{doctor.name}</h3>
          <p>{doctor.specialty}</p>
        </div>
      ))}
    </div>
  );
}

export default DoctorList;
