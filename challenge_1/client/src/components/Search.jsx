import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchedItem: {},
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }

  handleChange(e) {
    let newState = Object.assign({}, searchedItem);
    newState[e.target.name] = e.target.value;
    this.setState({
      searchedItem: newState
    });
  }

  handleSubmit(e) {
    this.props.fetchInfo(e)
    e.target.value = '';
  }

  onEnter(e) {
    if (e.key === 'Enter') {
      this.handleSubmit(e);
    }
  }

  render() {
    return (
      <label>
        <input onChange={this.handleChange} onKeyPress={this.onEnter}></input>
      </label>
    )
  }
}

export default Search;