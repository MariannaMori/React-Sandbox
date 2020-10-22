import React from "react";
import "./App.css";


const personalMotto = "you can learn:";

function Box(props){
  return (
    <div className="box">
    <h1>{props.name}</h1>
    <h1>{personalMotto}</h1>
    <p>Skill: {props.skill}</p>
    <p>{props.star}</p> 
  </div>

  );
}

function App() {
  return (
    <div className="App">
      
      <Box name="Marianna," skill="React" star="***********************" />
      <Box name="Marianna," skill="Node" star="***********************"/>
      <Box name="Marianna," skill="JavaScript" star="***********************"/>
      <Box name="Marianna," skill="Redux" star="***********************"/>
      <Box name="Marianna," skill="Express" star="***********************"/>
    
    </div>

  );
}

export default App;

