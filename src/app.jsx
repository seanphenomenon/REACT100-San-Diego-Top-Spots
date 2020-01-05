import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      topspots: [],

    }
  }

  componentWillMount() {
    axios.get('https://codepen.io/merobertsjr/pen/WayqqB.js')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }


  render() {

    return (
      <div>
        <div className='App'></div>
        <div className="container">
          <div className="jumbotron">

            <h1>San Diego Top Spots</h1>
            <p>A list of the top 30 places to see in San Diego, California</p>
          </div>
        </div>
        {
          this.state.topspots.map(topspot => (
            <TopSpot
              key={topspot.id}
              name={topspot.name}
              description={topspot.description}
              location={topspot.location}
            />
          ))
        }
        {/* <pre>
           { JSON.stringify(this.state.topspots, null, 2) }
          </pre> */}




      </div>
    );
  }
}

export default App;
