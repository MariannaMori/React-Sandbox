import React, {Component} from "react"; //task 10
import Animal from "./Components/Animal"
import "./App.css";

class App extends Component {
  state = {
    animals: [
      {name:"Cat", img: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
      {name:"Tiger", img: "https://images.unsplash.com/photo-1503066211613-c17ebc9daef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
      {name:"Lion", img: "https://images.unsplash.com/photo-1550699566-83f93df24072?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },

    ],
  };


  render(){
    return(
      <div className="cards">
      <Animal name={this.state.animals[0].name}
      img={this.state.animals[0].img}
      />
    <Animal name={this.state.animals[1].name}
      img={this.state.animals[1].img}
      />
          <Animal name={this.state.animals[2].name}
      img={this.state.animals[2].img}
      />
    </div>
    );
  }
}



export default App;
