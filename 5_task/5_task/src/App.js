import React, { Component } from "react";
import Circle from "./Components/Circle/Circle";
import GameOver from "./Components/GameOver/GameOver";

/* This JavaScript function always returns a random number between min and max (both included)*/
const getRndInteger =(min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/* By default the score is 0. Then we add it under clickHander. */
class App extends Component {
  state = {
    score: 0,
    current: 0,
    showGameOver: false,
    rounds: 0,
    circles: [
      {id: 1, color: "green"},
      {id: 2, color: "blue"},
      {id: 3, color: "red"},
      {id: 4, color: "orange"},
    ],
  };
  pace = 1500;
  timer = undefined;

  /* This console.log allows to check it works. You should see wow in console every time you click. Here instead of id you could write anything.*/
  clickHandler = (id) => {
    console.log("wow youve clicked" + id);

    if (this.state.current !== id) {
      this.stopHandler();
      return;
    }

    this.setState({
      score: this.state.score + 1,
      rounds: 0,
    });
  };

   /* Define nextActive as undefined. Later defint it as a random number between 1 and 4.*/
  nextCircle = () => {
    if (this.state.rounds >= 5) {
      this.stopHandler();
      return;
    }
    let nextActive = undefined;

    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);

    /* Then we override current with nextActive. We add one to the number of rounds. */
    this.setState({
      current: nextActive,
      rounds: this.state.rounds + 1,
    });

    this.pace *= 0.95;
    this.timer = setTimeout(this.nextCircle, this.pace);

    console.log("Active circle is:" , this.state.current);
  };

  startHandler = () =>{
    this.nextCircle();
  }

  stopHandler = () => {
    clearTimeout(this.timer);

    this.setState({showGameOver: true})
  };

/* Above we add one to score. Then we need to add a placeholder in our div to show it.*/
/* Below, mapping comes between render and return. */
  render() {
    const circles = this.state.circles.map(item => {
      return (<Circle key={item.id} color={item.color} click={() => this.clickHandler(item.id)}
      active={this.state.current === item.id}
       />);
    });
    /* Above, click calls the attribute in circle.js. Class components need "this" defined. Here it's important to say id because we call it from the class component above.*/

    
    return (
      <div>
        <h1>Speed game</h1>
        <p>You got: {this.state.score} </p>
        <div>{circles}</div>
        <button onClick={this.startHandler}>Start</button>
        <button onClick={this.stopHandler}>Stop</button>
        {this.state.showGameOver && <GameOver score={this.state.score}/
        >}
      </div>
    );
  }
}

export default App;
