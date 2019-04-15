import React, { Component } from 'react';
import {Icon} from 'react-materialize';
import './SearchBar.css';

// This is one component of your main, the search bar
// Theoretically, we could shove all of SearchBar.js into App.js with the magic of copy pasta, 
// But the purpose of React is to maintain the structural integrity of * components * in the project
class SearchBar extends Component {

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <nav>
        			<div className="nav-wrapper">
        				<form>
            			<div className="input-field">
            				<input id="search" type="search" required></input>
                    <label class="label-icon" for="search"><Icon>search</Icon></label>
            			</div>
        				</form>
        			</div>
    				</nav>
        </header>
      </div>
    );
  }
}

export default SearchBar;
