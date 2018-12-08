import React from 'react';
import Score from './Score.jsx';

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
        ten: false,
        keypad: 'red',
        clickedNumber: ''
    }
    this.keepScore = this.keepScore.bind(this);
  }

  //onClick will invoke this
  // keepScore(e){
  //   e.preventDefault();
  //   let newState = {};
  //   newState[e.target.name] = e.target.value;
  //   // let clickedNumber = 10 - Number.parseInt(e.target.name);
  //   //if Number.parseInt(e.target.name) > clickedNumber
  //   this.setState({
  //     clickedNumber: newState[e.target.name]
  //   })
  // }

  keepScore(e){
    e.preventDefault();
    this.setState({
      clickedNumber: Number.parseInt(e.target.name)
    })
  }


  render() {
    return (
      <div>
        <div className="keypad">
            <button name="1" style={{color: this.state.keypad}} onClick={(e) => {this.keepScore(e)}}>
              1 {this.state.one}
            </button>
            <button name="2" style={{color: this.state.keypad}}>
              2 {this.state.two}
            </button>
            <button name="3" style={{color: this.state.keypad}}>
              3 {this.state.three}
            </button>
            <br />
            <button name="4" style={{color: this.state.keypad}}>
              4 {this.state.four}
            </button>
            <button name="5" style={{color: this.state.keypad}}>
              5 {this.state.five}
            </button>
            <button name="6" style={{color: this.state.keypad}}>
              6 {this.state.six}
            </button>
            <br />
            <button name="7" style={{color: this.state.keypad}}>
              7 {this.state.seven}
            </button>
            <button name="8" style={{color: this.state.keypad}}>
              8 {this.state.eight}
            </button>
            <button name="9" style={{color: this.state.keypad}}>
              9 {this.state.nine}
            </button>
            <br />
            <button name="10" style={{color: this.state.keypad}}>
              10 {this.state.ten}
            </button>
          </div>
          <span>Clicked: </span>{this.state.clickedNumber}
          <Score />
      </div>  
    )
  }
}

export default ScorePad;