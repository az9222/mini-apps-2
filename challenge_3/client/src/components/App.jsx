import React from 'react';
import ScorePad from './ScorePad.jsx';
import Score from './Score.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }
  
  render() {
    return (
      <div>
        <p>Welcome to the Bowling Game!</p>
        <ScorePad />
        <Score />
      </div>
    )
  }
};

export default App;