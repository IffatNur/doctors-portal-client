import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyAppointment = () => {
  const {user} = useContext(AuthContext);

  const {data : bookings = []} = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async ()=>{
      const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`,{
        headers:{
          authorization: `Bearer ${localStorage.getItem('Token')}`
        }
      });
      const data = await res.json();
      return data
    }
})
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Patient Name</th>
            <th>Treatement</th>
            <th>Time Slot</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, i) => (
            <tr className="hover" key={booking._id}>
              <th>{i+1}</th>
              <td>{booking.patientName}</td>
              <td>{booking.treatment}</td>
              <td>{booking.selectedSlot}</td>
              <td>{booking.selectedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppointment;
