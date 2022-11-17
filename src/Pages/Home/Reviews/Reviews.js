import React from 'react';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from '../Review/Review';

const Reviews = () => {
    const reviews = [
      {
        id: 1,
        description:
          "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        img: people1,
        name: "Harry Potter",

        location: "California",
      },
      {
        id: 2,
        description:
          "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        img: people2,
        name: "Rapunzel",
        location: "Georgea",
      },
      {
        id: 3,
        description:
          "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        img: people3,
        name: "Harmaine Gringer",
        location: "Texas",
      },
    ];
    return (
      <div className="my-10">
          <div className='my-5 ml-5'>
            <small className='text-primary font-bold'>Testimonial</small>
            <h1 className='text-3xl'>What Our Patients Says</h1>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {reviews.map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
      </div>
    );
};

export default Reviews;