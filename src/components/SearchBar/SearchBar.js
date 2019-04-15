import React, { Component } from 'react';
import {Icon} from 'react-materialize';
import './SearchBar.css';
import Card from '../Card/Card.js'

// This is one component of your main, the search bar
// Theoretically, we could shove all of SearchBar.js into App.js with the magic of copy pasta, 
// But the purpose of React is to be able to reuse and separate parts of the UI
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    return (<Card/>);
  }

  render() {
    return (
        <div className="SearchBar">
            <nav>
        			<div className="nav-wrapper">
        				<form onSubmit={this.handleSubmit}>
            			<div className="input-field">
            				<input id="search" type="search" value={this.state.value} onChange={this.handleChange} required></input>
                    <label className="label-icon" for="search"><Icon>search</Icon></label>
            			</div>
        				</form>
        			</div>
    				</nav>
            <Card/>
      </div>
    );
  }
}

export default SearchBar;
