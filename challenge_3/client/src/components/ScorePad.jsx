import React from 'react';
// import style from './style.css';

class ScorePad extends React.Component {
  constructor(props) {
    super(props) 
      this.state = {
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
        seven: false,
        eight: false,
        nine: false,
        ten: false
    }
  }

  render() {
    return (
      <div>
        <div className='keypad'>{this.state.one} 1</div>
      </div>
    )
  }
}

export default ScorePad;