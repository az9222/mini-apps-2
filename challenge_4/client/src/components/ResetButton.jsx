import React from 'react';

const ResetButton = (props) => (
  <button onClick={(e)=>{props.clickToReset}}>Reset</button>
)

export default ResetButton;