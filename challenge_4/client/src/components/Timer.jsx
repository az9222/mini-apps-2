import React from 'react';

const StartTimerButton = (props) => (
  <button onClick = {() => {props.startTime()}}>
    Start Timer
  </button>
)

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 10,
    }
    this.startTimer = this.startTimer.bind(this);
  }

  startTimer() {
    setTimeout(() => {
      while (this.state.timer > 0) {
        this.state.timer -= 1;
      }
      if (this.state.timer === 0) {
        window.clearInterval(this.interval);
      }
    }, 10);
  };

  render(){
    return (
      <div>
        <span>Time: {this.state.timer} seconds </span>
        <br />
        <StartTimerButton startTime = {this.startTimer} />
      </div>
    )
  }
};

export default Timer;