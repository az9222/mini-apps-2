import React from 'react';

const Score = (props) => {
  let sum = 0;
  sum += props.score;
  return (
  <div>
    <p>Current Score: {sum} </p>
  </div>
  )
};

export default Score;