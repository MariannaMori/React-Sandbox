import React, { Component } from "react";
import "./App.css";
import Form from "./Form/Form";
import View from "./View/View";
import Popup from "./Popup/Popup";

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    message: "",
    role: "",
    showPopup: false,
  };

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitHandler = (e) => {
    this.setState({
      showPopup: true,
    });
    e.preventDefault();
  };

  render() {
    return (
      <>
        <Form onChange={this.changeHandler} submit={this.submitHandler} />
        <View
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phonenumber={this.state.phonenumber}
          message={this.state.message}
          role={this.state.role}
        />
        {this.state.showPopup && (
          <Popup
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            phonenumber={this.state.phonenumber}
            message={this.state.message}
            role={this.state.role}
          />
        )}
      </>
    );
  }
}

export default App;
