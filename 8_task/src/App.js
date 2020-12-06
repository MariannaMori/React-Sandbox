import React, { useState } from "react";
import "./App.css";
import Form from "./Form/Form";
import View from "./View/View";
import Popup from "./Popup/Popup";
import NotesList from "./NotesList/NotesList";
import axios from "axios";

const App = () => {
  const [note, setNote] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    message: "",
    role: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const changeHandler = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const popupHandler = (e) => {
    setShowPopup(true);
    e.preventDefault();
  };

  const submitHandler = () => {
    axios.post("http://localhost:3001/notes", note);
    window.location.reload();
  };

  return (
    <>
      <Form change={changeHandler} submit={popupHandler} />
      <View
        firstname={note.firstname}
        lastname={note.lastname}
        phonenumber={note.phonenumber}
        message={note.message}
        role={note.role}
      />
      <NotesList />
      {showPopup && (
        <Popup
          firstname={note.firstname}
          lastname={note.lastname}
          phonenumber={note.phonenumber}
          message={note.message}
          role={note.role}
          submit={submitHandler}
        />
      )}
    </>
  );
};

export default App;
