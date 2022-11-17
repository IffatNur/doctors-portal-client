import React from 'react';
import Service from '../Service/Service';
import img1 from '../../../assets/images/cavity.png';
import img2 from '../../../assets/images/fluoride.png';
import img3 from '../../../assets/images/whitening.png';

const Services = () => {
    const services = [
      {
        id:1,
        img: img1,
        title: "Cavity Filling",
        description:
          "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      },
      {
        id:2,
        img: img2,
        title: "Fluoride Treatment",
        description:
          "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      },
      {
        id:3,
        img: img3,
        title: "Teeth Whitening",
        description:
          "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      },
    ];
    return (
      <div className="text-center">
        <div className='my-10'>
          <h1 className='text-primary text-4xl font-semibold'>Services</h1>
          <p className='text-xl'>Services we provide</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    );
};

export default Services;