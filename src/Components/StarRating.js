import React from 'react';
import star from '../Images/star_black.png';

const StarRating = ({ val }) => {
  const stars = [];
  let circleColor = '';
  for (let i = 0; i < val; ++i) {
    if (i === 0) {
      circleColor = '#FABECD';
    } else if (i === 1) {
      circleColor = '#F5FF08';
    } else if (i === 2) {
      circleColor = '#D0D1D6';
    } else if (i === 3) {
      circleColor = '#8EE988';
    }
    stars.push(
      <div
        style={{
          backgroundColor: circleColor,
          height: '15px',
          width: '15px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={star} style={{ width: '12px' }} alt="Star" />
      </div>
    );
  }
  return <div style={{ display: 'flex', marginTop: '8px' }}>{stars}</div>;
};

export default StarRating;
