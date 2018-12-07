import React from 'react';
import Chart from './Chart.jsx';
//https://medium.com/@vickdayaram/using-chart-js-with-react-324b7fac8ee6

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      disclaimer: '',
      dates: [],
      prices: []
    }
  };

  componentDidMount() {
    this.fetchPriceInfo();
  };

  fetchPriceInfo(){ //no need to bind 
    fetch('/dataPrices').then(
    (response) => response.json()
    ).then((data) => {
      let dates = [];
      let endPrices = []; //last price on that day
      for (var bpiDate in data.bpi) {
        dates.push(bpiDate);
        endPrices.push(data.bpi[bpiDate])
      }
      this.setState({
        listData: data,
        disclaimer: data.disclaimer,
        dates: dates,
        prices: endPrices
      });
      this.setState({
        object: {
          labels: this.state.dates, //xaxis
          datasets: [{ //yaxis
            label: 'Bitcoin Prices for November',
            backgroundColor: 'blue',
            boarderColor: 'black',
            data: this.state.prices
          }]
        }
      })
    })
    .catch((error) => {console.log(error)});
  };

  render() {
    if (!this.state.object) {
      return (
        <div>
          Please wait...
        </div>
      )
    } else {
      return (
        <div>
          <Chart data={this.state.object} />
          <div>{this.state.disclaimed}</div>
        </div>
      )
    }
  }
};

export default App;