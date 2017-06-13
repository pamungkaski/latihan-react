import React, { Component } from 'react';
import Projects from './components/Project'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        React Try App
        <Projects/>
      </div>
    );
  }
}

export default App;
