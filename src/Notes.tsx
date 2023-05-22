import { Box, Typography } from "@mui/material";
import { INotesProps } from "./utils";
import Note from "./Note";

const Notes: React.FC<INotesProps> = ({ notes, deleteNote }) => {
  return (
    <Box>
      <Typography variant="h5">Notes</Typography>
      <Box>
        {notes.map((note, index) => (
          <Note key={index} note={note} deleteNote={deleteNote} />
        ))}
      </Box>
    </Box>
  );
};

export default Notes;
