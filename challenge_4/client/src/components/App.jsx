import React from 'react';
import Board from './Board.jsx';
import ResetButton from './ResetButton.jsx';
import NewBoard from './NewBoard.jsx';
import Timer from './Timer.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.resetPage = this.resetPage.bind(this);
  }

  resetPage(e) {
    return (
      <NewBoard />
    )
  }

  render(){
    return (
      <div>
        <p>MINESWEEPER</p>
        <Board />
        <br />
        <ResetButton clickToReset={this.resetPage} />
        <br />
        <br />
        <Timer />
      </div>
    )
  }
}

export default App;