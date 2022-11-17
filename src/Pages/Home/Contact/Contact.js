import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaRegClock } from 'react-icons/fa';

const Contact = () => {
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="flex justify-center text-white bg-primary py-10  px-10 w-3/4 mx-auto rounded-lg">
            <div>
              <FaRegClock className="text-5xl mr-3"></FaRegClock>
            </div>
            <div>
              <p>Opening Houres</p>
              <small>Lorem ipsum dolor sit amet.</small>
            </div>
          </div>
          <div className="flex justify-center text-white bg-primary py-10 px-10 w-3/4 mx-auto rounded-lg">
            <div>
              <FaMapMarkerAlt className="text-5xl mr-3"></FaMapMarkerAlt>
            </div>
            <div>
              <p>Visit our location</p>
              <small>Brooklyn, NY 10036, United States</small>
            </div>
          </div>
          <div className="flex justify-center text-white bg-primary py-10 px-10 w-3/4 mx-auto rounded-lg">
            <div>
              <FaPhone className="text-5xl mr-3"></FaPhone>
            </div>
            <div>
              <p>Contact us now</p>
              <small>+000 123 456789</small>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;