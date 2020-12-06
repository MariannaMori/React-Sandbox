import React, { useState, useEffect } from "react";
import axios from "axios";

const NotesList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      axios
        .get("http://localhost:3001/notes")
        .then((res) => setPosts(res.data)),
    []
  );

  return (
    <div>
      <ul>
        {posts.map((p) => (
          <li>
            {" "}
            {p.firstname} {p.lastname} {p.phonenumber} <em>{p.role}</em> -{" "}
            <strong>{p.message}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
