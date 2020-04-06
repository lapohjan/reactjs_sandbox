import React, { Component } from 'react';
import './App.css';
import Circle from "./Circle/Circle";

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

class App extends Component {
  state = {
    score: 0,
    current: 0,
  };

  pace = 1500;
  timer = undefined;

  next = () => {
    let nextActive = undefined;
    
    do {
      nextActive = getRndInteger(1,4);
    } while (nextActive === this.state.current)

    this.setState({
      current: nextActive,
    });

    this.timer = setTimeout(this.next, this.pace);
    console.log("this is active circle", this.state.current);
  };


  clickHandler = (circleID) => {
    console.log('Clicked = ', circleID);
    this.setState({
      score: this.state.score + 1,
     });
  };

  startHandler = () => {
    this.next();
  };

  endHandler = () => {
    clearTimeout(this.timer);
  };


  render() {
    return (
    <div>
     <h1>Speedtest</h1>
     <p>Your score: {this.state.score}</p>
     <main>
       <Circle
       active={this.state.current === 1}
       mydefaultcolor="yellow"
       click={this.clickHandler.bind(this, 1)} 
       />
       <Circle 
      active={this.state.current === 2}
       mydefaultcolor="green"
       click={this.clickHandler.bind(this, 2)} 
       />
       <Circle
        active={this.state.current === 3}
       mydefaultcolor="red"
       click={this.clickHandler.bind(this, 3)} 
       />
       <Circle
        active={this.state.current === 4}
       mydefaultcolor="blue"
       click={this.clickHandler.bind(this, 4)} 
       />
     </main>
     <div>
    <button onClick={this.startHandler}>Start test</button>
    <button onClick={this.endHandler}>End test</button>
    </div>
    </div>
    );
  }
}

export default App;
