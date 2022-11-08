import "./App.css";
import React from "react";
import { useState } from "react";

function NotesAndButton() {
  const [notes, setNotes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const addNoteOnClick = () => {
    setNotes((noteArray) => [...noteArray, `${new Date().toLocaleString()}`]);
  };

  const deleteNoteButton = (index) => {
    if (window.confirm("Are you sure you want to delete your note?")) {
      const noteDelete = notes.filter((note) => notes.indexOf(note) !== index);
      setNotes(noteDelete);
    }
  };
  function getNoteInfo(index) {
    const noteInfo = notes.filter((note) => notes.indexOf(note) === index);
    console.log(noteInfo);
    return noteInfo;
  }
  return [
    <div>
      {notes.map((note, index) => (
        <div className="Note">
          <div
            className="IndividualNotes"
            onClick={() => {
              setIsOpen(true);
              document.getElementById("pop-up-info").innerHTML =
                getNoteInfo(index);
            }}
          >
            <div className="Note-title">{"Note title:"}</div>
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
      {isOpen && (
        <div className="Pop-up">
          <div>
            {"Note title:"}
            <p></p>
            {"Example note"}
            <p></p>
            <div id="pop-up-info">Click on a note to see details</div>
          </div>
          <button
            className="Button-close-pop-up"
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
        </div>
      )}
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
