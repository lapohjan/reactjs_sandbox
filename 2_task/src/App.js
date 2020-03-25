import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';


class App extends Component {
  state = {
    persons: [
      { name: 'Laura', age: 42 },
      { name: 'Ilari', age: 48 },
      { name: 'Aapo', age: 8 },
      { name: 'Siiri', age: 6 },
    ] 
  };

  render() {
    return (
      <div>
      <h1>Hello, World!</h1>
      <p>Hello, World!</p>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
    </div>
    );
  };
}

export default App;
