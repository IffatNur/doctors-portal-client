import React, { useState } from 'react';
import Button from '../../../components/Button';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import Chair from "../../../assets/images/chair.png";


const AppBanner = ({ setSelectedDate, selectedDate }) => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse banner-bg">
          <img src={Chair} className="lg:w-1/2 rounded-lg shadow-2xl " alt="" />
          <div className="block">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            ></DayPicker>
            <br />
            <p>Appointment Date: {format(selectedDate, "PP")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;