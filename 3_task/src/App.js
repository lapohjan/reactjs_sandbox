import React, { Component } from 'react';
import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

class App extends Component {
  state = {
    likes: 0
  };

  addHandler = () => {
    console.log('addHandler clicked');
    this.setState({ likes: this.state.likes + 1 });
  };

  removeHandler = () => {
    console.log('removeHandler clicked');
    this.setState({ likes: this.state.likes - 1 });
  };

  resetHandler = () => {
    console.log('resetHandler clicked');
    this.setState({ likes: 0 });
  };

  render() {
    return (
      <div>
        <Header />
        <h1 className={this.state.likes === 0 ? "likes" : this.state.likes % 2 === 0 ? "likes even" : "likes odd"}>Total likes: {this.state.likes} </h1>
        <button onClick={this.addHandler}>Add like</button>
        <button onClick={this.removeHandler}>Remove like</button>
        <button onClick={this.resetHandler}>Reset likes</button>
      </div>
    );
  }
}


export default App;
