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
        clickedNumber: '',
        sum: 0
    }
    this.keepScore = this.keepScore.bind(this);
  }

  // keepScore(e){
  //   e.preventDefault();
  //   this.setState({
  //     clickedNumber: Number.parseInt(e.target.name)
  //   })
  //   e.target.style.backgroundColor = '#ACA4A4'
  // }

  keepScore(e){
    e.preventDefault();
    this.setState({
      clickedNumber: Number.parseInt(e.target.name),
      sum: this.state.sum += Number.parseInt(e.target.name)
    })
    e.target.style.backgroundColor = '#ACA4A4'
  }

  render() {
    return (
      <div>
        <div className="keypad">
            <button name="1" style={{backgroundColor: this.state.keypad}} onClick={(e) => {this.keepScore(e)}}>
              1 {this.state.one}
            </button>
            <button name="2" style={{backgroundColor: this.state.keypad}} onClick={(e) => {this.keepScore(e)}}>
              2 {this.state.two}
            </button>
            <button name="3" style={{backgroundColor: this.state.keypad}} onClick={(e) => {this.keepScore(e)}}>
              3 {this.state.three}
            </button>
            <br />
            <button name="4" style={{backgroundColor: this.state.keypad}} onClick={(e) => {this.keepScore(e)}}>
              4 {this.state.four}
            </button>
            <button name="5" style={{backgroundColor: this.state.keypad}} onClick={(e) => {this.keepScore(e)}}>
              5 {this.state.five}
            </button>
            <button name="6" style={{backgroundColor: this.state.keypad}} onClick={(e) => {this.keepScore(e)}}>
              6 {this.state.six}
            </button>
            <br />
            <button name="7" style={{backgroundColor: this.state.keypad}} onClick={(e) => {this.keepScore(e)}}>
              7 {this.state.seven}
            </button>
            <button name="8" style={{backgroundColor: this.state.keypad}} onClick={(e) => {this.keepScore(e)}}>
              8 {this.state.eight}
            </button>
            <button name="9" style={{backgroundColor: this.state.keypad}} onClick={(e) => {this.keepScore(e)}}>
              9 {this.state.nine}
            </button>
            <br />
            <button name="10" style={{backgroundColor: this.state.keypad}} onClick={(e) => {this.keepScore(e)}}>
              10 {this.state.ten}
            </button>
          </div>
          <span>Clicked: </span>{this.state.clickedNumber}
          <Score score={this.state.sum} />
      </div>  
    )
  }
}

export default ScorePad;