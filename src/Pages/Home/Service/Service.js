import React from 'react';

const Service = ({service}) => {
    const {img, title, description} = service;
    return (
      <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-5 mx-auto">
          <figure>
            <img src={img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title  mx-auto">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
};

export default Service;