import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading';
import AppCard from '../AppCard/AppCard';
import AppModal from '../AppModal/AppModal';

const AppAvailable = ({ selectedDate }) => {
    // const [options, setOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const { data: options = [], refetch, isLoading} = useQuery({
      queryKey: ["appointments", date],
      queryFn: async () => {
        const res = await fetch(`http://localhost:5000/appointments?date=${date}`);
        const data = await res.json();
        return data;
      },
    });

    if(isLoading){
      return <Loading></Loading>
    }

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/appointments`)
    //       .then((res) => res.json())
    //       .then((data) => setOptions(data));
    // },[])
  return (
    <div>
      <p className="text-center text-secondary font-bold my-10">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5">
        {options.map((option) => (
          <AppCard
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></AppCard>
        ))}
      </div>

      {treatment && (
        <AppModal
          treatment={treatment}
          setTreatment={setTreatment}
          selectedDate={selectedDate}
          refetch={refetch}
        ></AppModal>
      )}
    </div>
  );
};

export default AppAvailable;