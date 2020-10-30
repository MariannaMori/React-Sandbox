import React, {Component} from "react";
import "./App.css";



class App extends Component {
  state = {
    likes: 0,
  };

addHandler = () =>{

  this.setState({ likes: this.state.likes +1 });
};

removeHandler = () =>{

  if(this.state.likes < 0){
   this.setState({ likes: 0 });
  }else {
    this.setState({ likes: this.state.likes -1 });
  }
  
};

resetHand = () =>{
 
this.setState({ likes: 0 });
};

  render() {
    return (
      <div>
        <h1>Total likes: {this.state.likes}</h1>
        <button onClick={this.addHandler}>Add one</button>
        <button onClick={this.removeHandler}>Remove one</button>
        <button onClick={this.resetHand}>Reset</button>
      </div>
    );
  }
}

export default App;
