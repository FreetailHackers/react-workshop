import React, { Component } from 'react';
import {Icon} from 'react-materialize';
import './Card.css';

// This is one component of your main, the search bar
// Theoretically, we could shove all of SearchBar.js into App.js with the magic of copy pasta, 
// But the purpose of React is to be able to reuse and separate parts of the UI
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render() {
    return (
      <div className="Card">
        <div className="row">
          <div className="col m12 m5">
            <div className="card-panel teal">
              <span className="white-text">
                {this.state.value} hi i am bob i just really want a friend to love me forever and stay by
                my side no matter what
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
