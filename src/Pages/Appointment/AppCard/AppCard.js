import React from 'react';

const AppCard = ({ option, setTreatment }) => {
  const { name, slots } = option;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto text-center">
        <div className="card-body ">
          <h2 className="card-title mx-auto text-primary text-2xl font-bold">
            {name}
          </h2>
          <p>{slots.length > 0 ? slots[0] : "No slots available"}</p>
          <p>
            {slots.length} {slots.length > 0 ? "spaces" : "space"}
          </p>
          <div className="card-actions justify-center">
            <label
            disabled={slots.length===0}
              htmlFor="booking-modal"
              className="btn btn-primary text-white"
              onClick={() => setTreatment(option)}
              
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;