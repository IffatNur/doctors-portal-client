import React from 'react';
import Button from '../../../components/Button';
import './Contactus.css'

const Contactus = () => {
    return (
      <div className="contact-bg py-14 my-20">
        <div className='text-center'>
          <small className='text-primary font-bold'>Contact Us</small>
          <p className='text-white text-3xl'>Stay connected with us</p>
        </div>
        <div className='text-center'>
          <input
            type="text"
            placeholder="Email Address"
            className="input input-bordered input-sm max-w-xs w-3/4  my-3"
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered input-sm max-w-xs w-3/4 my-3"
          />{" "}
          <br />
          <textarea
            className="textarea textarea-info w-3/12 my-3"
            placeholder="Type your message"
          ></textarea>
          <Button>Submit</Button>
        </div>
      </div>
    );
};

export default Contactus;