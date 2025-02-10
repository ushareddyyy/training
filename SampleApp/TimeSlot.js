import React from 'react';

function TimeSlot({ timeSlots, selectTimeSlot }) {
  return (
    <div>
      <h2>Select a Time Slot</h2>
      <ul>
        {timeSlots.map((slot, index) => (
          <li key={index} onClick={() => selectTimeSlot(slot)}>
            {slot}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TimeSlot;
