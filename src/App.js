import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';

// You can think of this as your 'main'
// The highest layer of abstraction made up of smaller components is our App.js
class App extends Component {

  // Set up of our props and state
  constructor(props) {
    super(props);
    this.state = {
        theme: 'light',
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  // Function to toggle theme to dark or light mode
  toggleTheme = () => {
    // Check what the current theme is and toggle the opposite
    const theme = this.state.theme === "light" ? "dark" : "light";
    // Set the state to the new theme
    this.setState({ theme });
    // Actually update the theme on the page
    document.documentElement.setAttribute("data-theme", theme);   
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
					<SearchBar/>
          {/* Toggle element for theme*/}
          <div className="switch">
            <label>
              Off
            <input type="checkbox" onClick={this.toggleTheme}></input>
            <span className="lever"></span>
              On
            </label>
          </div>  
        </header>
      </div>
    );
  }
}

export default App;
