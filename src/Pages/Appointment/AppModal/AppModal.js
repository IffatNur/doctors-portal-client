
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';

const AppModal = ({ selectedDate, treatment, setTreatment, refetch }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");
  const { user } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const patientName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const slot = form.slot.value;
    const patientInfo = {
      treatment: name,
      selectedSlot: slot,
      selectedDate: date,
      patientName: patientName,
      email,
      phone,
    };
    if(patientName !== '' && email !== ''){
      fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(patientInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            console.log(patientInfo);
            setTreatment(null);
            toast.success("Treatment Slot Confirmed");
            refetch();
          } else {
            toast.error(data.message);
          }
        });
    }
    else{
      toast.error('Please login first')
    }
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-sm w-full"
              value={date}
              disabled
            />
            <select
              name="slot"
              className="select select-sm select-bordered w-full"
            >
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered input-sm w-full"
              defaultValue={user?.displayName}
              disabled
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="input input-bordered input-sm w-full"
              defaultValue={user?.email}
              disabled
              required
            />
            <input
              name="phone"
              type="phone"
              placeholder="Phone Number"
              className="input input-bordered input-sm w-full"
              required
            />
            <input
              type="submit"
              value="Submit"
              className="input input-bordered input-sm w-full bg-accent text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppModal;