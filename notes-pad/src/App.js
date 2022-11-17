import "./App.css";
import React from "react";
import { useState } from "react";

function NotesAndButton(props) {
  const [notes, setNotes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [popUp, setPopUp] = useState("");
  const addNoteOnClick = () => {
    if (props.noteText === "") {
      return;
    } else {
      setNotes((noteArray) => [
        ...noteArray,
        [[props.title], [props.noteText], [new Date().toLocaleString()]],
      ]);
    }
  };

  const deleteNoteButton = (index) => {
    if (window.confirm("Are you sure you want to delete your note?")) {
      const noteDelete = notes.filter((note) => notes.indexOf(note) !== index);
      setNotes(noteDelete);
    }
  };
  const getNoteInfo = (index) => {
    const noteInfo = notes.filter((note) => notes.indexOf(note) === index);
    return noteInfo;
  };
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
            <div className="Note-content">
              {note[0]}
              <br></br>
              {note[1]}
              <br></br>
              {note[2]}
            </div>
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
            <div>
              {popUp[0][0]}
              <br></br>
              {popUp[0][1]}
              <br></br>
              {popUp[0][2]}
            </div>
          </div>
          <button
            className="Button-close-pop-up"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>,

    <input
      key="600"
      type="button"
      className="Add-note-button"
      onClick={() => addNoteOnClick()}
      value="Add note"
    />,
  ];
}

function NoteTitleInput(props) {
  return (
    <div>
      <input
        className="Title-field"
        type="text"
        placeholder="Title"
        onChange={props.onChange}
      ></input>
    </div>
  );
}

function NoteTextInput(props) {
  return (
    <div>
      <input
        className="Note-field"
        type="text"
        onChange={props.onChange}
      ></input>
    </div>
  );
}
function App() {
  const [title, setTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeNote = (e) => {
    setNoteText(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Notes-grid">
          <NotesAndButton title={title} noteText={noteText} />
          <NoteTitleInput onChange={onChangeTitle} />
          <NoteTextInput onChange={onChangeNote} />
        </div>
      </header>
    </div>
  );
}

export default App;
