import "./App.css";
import React from "react";
import { useState } from "react";

function NotesAndButton() {
  const [notes, setNotes] = useState([]);

  const addNoteOnClick = () => {
    setNotes((noteArray) => [...noteArray, `${new Date().toLocaleString()}`]);
  };

  const deleteNoteButton = (index) => {
    if (window.confirm("Are you sure you want to delete your note?")) {
      const noteDelete = notes.filter((note) => notes.indexOf(note) !== index);
      setNotes(noteDelete);
    }
  };

  return [
    <div>
      {notes.map((note, index) => (
        <div className="Note">
          <div className="Note-title">{"Note title:"}</div>
          <div className="IndividualNotes">
            {"Example note"}
            <p></p>
            {note}
          </div>
          <p></p>
          ----
          <input
            type="button"
            onClick={() => deleteNoteButton(index)}
            className="Remove-note-button"
            value="Remove Note"
          />
          ----
        </div>
      ))}
    </div>,

    <input
      type="button"
      className="Add-note-button"
      onClick={addNoteOnClick}
      value="Add note"
    />,
  ];
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Notes-grid">
          <NotesAndButton />
        </div>
      </header>
    </div>
  );
}

export default App;
