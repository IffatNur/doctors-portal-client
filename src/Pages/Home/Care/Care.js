import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import Button from '../../../components/Button';

const Care = () => {
    return (
      <div>
        <div className="hero min-h-screen my-10">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={treatment}
              alt=""
              className="max-w-sm rounded-lg shadow-2xl lg:w-1/2"
            />
            <div className='lg:w-1/2 mx-10'>
              <h1 className="text-5xl font-bold">
                Exceptional Dental Care, on Your Terms
              </h1>
              <p className="py-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page
              </p>
              <Button>Getting Started</Button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Care;