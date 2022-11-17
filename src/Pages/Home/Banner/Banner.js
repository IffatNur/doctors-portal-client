import React from 'react';
import './Banner.css';
import Chair from '../../../assets/images/chair.png';
import { FaRegClock, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Button from '../../../components/Button';

const Banner = () => {
    return (
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse banner-bg">
            <img src={Chair} className="lg:w-1/2 rounded-lg shadow-2xl " alt="" />
            <div className="lg:w-1/2">
              <h1 className=" text-5xl font-bold">
                Your New Smile Starts Here
              </h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <Button>Explore</Button>
            </div>
          </div>
        </div>
        
      </div>
    );
};

export default Banner;