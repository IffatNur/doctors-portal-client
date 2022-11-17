import React, { useState } from 'react';
import AppAvailable from './AppAvailable/AppAvailable';
import AppBanner from './AppBanner/AppBanner';


const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
      <div>
        <AppBanner
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        ></AppBanner>
        <AppAvailable
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        ></AppAvailable>
      </div>
    );
};

export default Appointment;