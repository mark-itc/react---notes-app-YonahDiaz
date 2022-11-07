import "./App.css";
import React from "react";
import { useState } from "react";

function NotesAndButton() {
  const [note, setNote] = useState([]);

  const addNoteOnClick = () => {
    setNote((noteArray) => [...noteArray, `${new Date().toLocaleString()}`]);
  };

  const deleteNoteButton = () => {
    console.log("delete");
  };

  return [
    <div>
      {note.map((note, index) => (
        <div key={index} className="Note">
          <div className="Note-title">{"Note title:"}</div>
          <div className="IndividualNotes">
            {"Example note"}
            <p></p>
            {note}
          </div>
          <p></p>

          <input
            type="button"
            onClick={deleteNoteButton}
            className="Remove-note-button"
            value="Remove Note"
          />
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
