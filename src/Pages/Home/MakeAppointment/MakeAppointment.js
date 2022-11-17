import React from 'react';
import './MakeAppointment.css';
import doctor from '../../../assets/images/doctor-small.png'
import Button from '../../../components/Button';

const Appointment = () => {
    return (
      <div>
        <div className="hero appointment-bg img-height">
          <div className="hero-content flex-col lg:flex-row">
            <img src={doctor} alt="" className="w-1/2 max-w-sm img-height relative bottom-4 mx-auto hidden lg:block" />
            <div className='lg:w-1/2 '>
              <small className='text-primary'>Appointment</small>
              <h1 className="text-5xl font-bold">Make an appointment Today</h1>
              <p className="py-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page
              </p>
              <Button>Get An Appoinment</Button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Appointment;