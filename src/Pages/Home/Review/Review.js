import React from 'react';

const Review = ({review}) => {
    const {description,img, name, location} = review;
    return (
      <div>
        <div className="card w-96 bg-base-100 shadow-xl p-5 mx-auto">
          <div className="card-body">
            <p>{description}</p>
          </div>
          <div className="flex items-center">
              <div className="avatar">
                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
                  <img src={img} alt='' />
                </div>
              </div>
            <div>
              <p>{name}</p>
              <small>{location}</small>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Review;