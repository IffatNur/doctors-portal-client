import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
      <div className="footer-bg">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5">
          <div>
            <h4>SERVICES</h4> <br />
            <Link>Emergency Checkup</Link> <br />
            <Link>Monthly Checkup</Link> <br />
            <Link>Weekly Checkup</Link> <br />
            <Link>Deep Checkup</Link>
          </div>
          <div>
            <h4>ORAL HEALTH</h4> <br />
            <Link>Fluoride Treatment</Link> <br />
            <Link>Cavity Filling</Link> <br />
            <Link>Teath Whitening</Link>
          </div>
          <div>
            <h4>OUR ADDRESS</h4> <br />
            <p>New York - 101010 Hudson</p>
          </div>
        </div>
        <div className="text-center my-3">
          <h5>Copyright 2022 All Rights Reserved</h5>
        </div>
      </div>
    );
};

export default Footer;