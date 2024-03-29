import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";
import { notes } from "./notes";

function App() {
  const [notesArray, setNotesArray] = useState(notes);
  const addNote = (newNote) => {
    setNotesArray((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      {notesArray.map((noteItem) => (
        <Note
          key={noteItem.key}
          id={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
