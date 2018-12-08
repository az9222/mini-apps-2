import React from 'react';
import Score from './Score.jsx';

class ScorePad extends React.Component {
  constructor(props) {
    super(props) 
      this.state = {
        keypad: 'red',
        clickedNumber: '',
        sum: 0,
        limit: 'red',
    }
    this.keepScore = this.keepScore.bind(this);
  }

  // keepScore(e){
  //   e.preventDefault();
  //   this.setState({
  //     clickedNumber: Number.parseInt(e.target.name),
  //     sum: this.state.sum += Number.parseInt(e.target.name)
  //   })
  //   e.target.style.backgroundColor = '#ACA4A4'
  // }

  // keepScore(e){
  //   e.preventDefault();
  //   let limit = 10 - Number.parseInt(e.target.name);
  //   if (Number.parseInt(e.target.name) <= limit) {
  //       e.target.style.backgroundColor = '#ACA4A4'
  //       this.setState({
  //         clickedNumber: Number.parseInt(e.target.name),
  //         sum: this.state.sum += Number.parseInt(e.target.name)
  //       })
  //   }
  //   if (this.state.sum === 10) {
  //     alert('Game Over');
  //     this.setState({
  //       clickedNumber: 0,
  //       sum: 0,
  //     })
  //   }
  // }

keepScore(e){
  e.preventDefault();
  let limit = 10 - Number.parseInt(e.target.name);
  let target = e.target.name;
  console.log('l', target)
  if (Number.parseInt(e.target.name) <= limit || Number.parseInt(e.target.name) === 8) { //target?
      e.target.style.backgroundColor = '#ACA4A4'
      this.setState({
        clickedNumber: Number.parseInt(e.target.name),
        sum: this.state.sum += Number.parseInt(e.target.name)
      })
    }
    if (this.state.sum === 10) {
      this.setState({
        clickedNumber: 0,
        sum: 0,
      })
      alert('You got 10 points! Game Over');
    }
  }

  render() {
    return (
      <div>
        <div className="keypad">
            <button name="1" style={{backgroundColor: this.state.keypad}} onClick={(e) => {this.keepScore(e)}}>
              1 
            </button>
            <button name="2" style={{backgroundColor: this.state.keypad}} onClick={(e) => {this.keepScore(e)}}>
              2 
            </button>
            <button name="3" style={{backgroundColor: this.state.keypad}} onClick={(e) => {this.keepScore(e)}}>
              3 
            </button>
            <br />
            <button name="4" style={{backgroundColor: this.state.keypad}} onClick={(e) => {this.keepScore(e)}}>
              4 
            </button>
            <button name="5" style={{backgroundColor: this.state.keypad}} onClick={(e) => {this.keepScore(e)}}>
              5 
            </button>
            <button name="6" style={{backgroundColor: this.state.keypad}} onClick={(e) => {this.keepScore(e)}}>
              6 
            </button>
            <br />
            <button name="7" style={{backgroundColor: this.state.keypad}} onClick={(e) => {this.keepScore(e)}}>
              7 
            </button>
            <button name="8" style={{backgroundColor: this.state.keypad}} onClick={(e) => {this.keepScore(e)}}>
              8
            </button>
            <button name="9" style={{backgroundColor: this.state.keypad}} onClick={(e) => {this.keepScore(e)}}>
              9 
            </button>
            <br />
            <button name="10" style={{backgroundColor: this.state.keypad}} onClick={(e) => {this.keepScore(e)}}>
              10 
            </button>
          </div>
          <span>Bowled: </span>{this.state.clickedNumber}
          <Score score={this.state.sum} /> 
      </div>  
    )
  }
}

export default ScorePad;