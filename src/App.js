import React, { Component } from 'react';
import './App.css';

import Rectangle from './components/Rectangle/index';
import { Container } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rectangle: [0],
    }
  }

  renderRectangle = (i) => {
    return <Rectangle value={this.state.rectangle[i]} />;
  }

  render() {
      return (
        <Container>        
          {
            [...Array(15)].map ((n) => {
              console.log(n);
              return this.renderRectangle(n)
            }
            )
          }   
        </Container>
      );
  }  
}

export default App;
