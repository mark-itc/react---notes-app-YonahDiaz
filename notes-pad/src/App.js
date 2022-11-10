import "./App.css";
import React from "react";
import { useState } from "react";

function NotesAndButton() {
  const [notes, setNotes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [popUp, setPopUp] = useState("");
  const addNoteOnClick = () => {
    setNotes((noteArray) => [
      ...noteArray,
      `${
        `Note Title` +
        "\n" +
        `Example note` +
        "\n" +
        new Date().toLocaleString()
      }`,
    ]);
  };

  const deleteNoteButton = (index) => {
    if (window.confirm("Are you sure you want to delete your note?")) {
      const noteDelete = notes.filter((note) => notes.indexOf(note) !== index);
      setNotes(noteDelete);
    }
  };
  function getNoteInfo(index) {
    const noteInfo = notes.filter((note) => notes.indexOf(note) === index);
    return noteInfo;
  }
  return [
    <div key="100">
      {notes.map((note, index) => (
        <div key={index} className="Note">
          <div
            className="IndividualNotes"
            onClick={() => {
              setIsOpen(true);
              setPopUp(getNoteInfo(index));
            }}
          >
            <div className="Note-content">{note}</div>
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
            <div>{popUp}</div>
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
      key="600"
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
