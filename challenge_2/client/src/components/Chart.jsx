import React from 'react';
import {Line} from 'react-chartjs-2';

const Chart = (props) => (
  <Line data={props.data} />//You can signifify different types of charts like bar, line etc
)

export default Chart;