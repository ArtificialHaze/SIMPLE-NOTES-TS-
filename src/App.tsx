import "./App.css";
import Header from "./Header";
import CreateNote from "./CreateNote";
import { Box } from "@mui/material";
import Notes from "./Notes";
import { useEffect, useState } from "react";
import { INote } from "./utils";

const App = () => {
  const [notes, setNotes] = useState<INote[]>([]);

  useEffect(() => {
    if (sessionStorage.getItem("notes")) {
      setNotes(JSON.parse(sessionStorage.getItem("notes") as string));
    }
  }, []);

  const addNotes = (note: INote) => {
    setNotes([note, ...notes]);
    sessionStorage.setItem("notes", JSON.stringify([note, ...notes]));
  };

  const deleteNote = (id: number) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    sessionStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return (
    <div>
      <Header />
      <Box style={{ padding: 20 }}>
        <CreateNote addNotes={addNotes} />
        <Notes notes={notes} deleteNote={deleteNote} />
      </Box>
    </div>
  );
};

export default App;
