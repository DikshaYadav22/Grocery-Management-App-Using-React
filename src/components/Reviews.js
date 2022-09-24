import React from 'react';
import {FaGreaterThan, FaLessThan} from 'react-icons/fa';

function Reviews({review, index}) {
  return (
    <div>
        <div>
            <img src={review.image} width="200" />
        </div>
        <div>
            {review.name}
            <br/>
            {review.job}
            <br/>
            {review.text}
        </div>
        <div>
            <button><FaLessThan /></button>
            <button><FaGreaterThan /></button>
        </div>
    </div>
  )
}

export default Reviews