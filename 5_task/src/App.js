import React, { Component } from 'react';
import './App.css';
import Circle from "./Circle/Circle";
import GameOver from "./GameOver/GameOver";

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

class App extends Component {
  state = {
    score: 0,
    current: 0,
    showGameOver: false, 
    rounds: 0
  };

  pace = 1500;
  timer = undefined;

  next = () => {
  let audio = new Audio("/hamstersound2.mp3");
  
  if (this.state.rounds >= 5) {
  this.endHandler();
  }

    let nextActive = undefined;
    
    do {
      nextActive = getRndInteger(1,4);
    } while (nextActive === this.state.current);
    audio.play();

    this.setState({
      current: nextActive,
      rounds: this.state.rounds + 1,
    });

    this.pace *= 0.95;
    this.timer = setTimeout(this.next, this.pace);
    console.log("this is active circle", this.state.current);
  };


  clickHandler = (circleID) => {
    let audio = new Audio("/hamstersound.mp3");

    console.log('Clicked = ', circleID);

    if (this.state.current !== circleID) {
      this.endHandler();
      return;
    }
    audio.play();

    this.setState({
      score: this.state.score + 1,
      rounds: 0,
     });
  };

 

  startHandler = () => {
    this.next();
  };

  endHandler = () => {
    let audio = new Audio("/uh-oh.mp3");
    audio.play();

    clearTimeout(this.timer);
    this.setState({
      showGameOver: true
    });
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
    {this.state.showGameOver &&
    <GameOver score={this.state.score}/>}
    </div>
    );
  }
}

export default App;
