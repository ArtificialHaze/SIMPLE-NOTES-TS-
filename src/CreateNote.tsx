import React, { useState } from "react";
import { InputBase, Box, Button, styled, Typography } from "@mui/material";
import { INote, ICreateNotes } from "./utils";
import { v4 as uuid } from "uuid";
import { DETAILS_LIMIT, TITLE_LIMIT } from "./constants";

const Container = styled(Box)`
  & > * {
    margin: 20px 20px 20px 0;
  }
  & > div > input[type="text"] {
    border-bottom: 1px solid #111111;
    opacity: 0.4;
    width: 300px;
    padding-right: 25px;
  }
  & > div > input[type="color"] {
    position: relative;
    bottom: -10px;
    width: 40px;
    height: 30px;
  }
  & > span {
    position: relative;
    font-size: 10px;
    right: 40px;
  }
`;

const Error = styled(Typography)`
  background: crimson;
  color: #fff;
  padding: 10px;
  width: 50%;
`;

const defaultObject = {
  id: 0,
  title: "",
  details: "",
  color: "",
  date: new Date().toLocaleString().toString(),
};

const CreateNote: React.FC<ICreateNotes> = ({ addNotes }) => {
  const [note, setNote] = useState<INote>(defaultObject);
  const [error, setError] = useState<string>("");

  const onValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (error) {
      setError("");
    }
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const onCreateNote = () => {
    if (!note.title && !note.details) {
      setError("Fill up all fields");
      return;
    }
    addNotes({ ...note, id: uuid() });
    setNote(defaultObject);
  };

  return (
    <Container>
      <InputBase
        placeholder="Title.."
        onChange={(e) => onValueChange(e)}
        name="title"
        value={note.title}
        inputProps={{
          maxLength: TITLE_LIMIT,
        }}
      />
      <Box component={"span"}>
        {note.title.length} / {TITLE_LIMIT}
      </Box>
      <InputBase
        placeholder="Details.."
        onChange={(e) => onValueChange(e)}
        name="details"
        value={note.details}
        inputProps={{
          maxLength: DETAILS_LIMIT,
        }}
      />
      <Box component={"span"}>
        {note.details.length} / {DETAILS_LIMIT}
      </Box>
      <InputBase
        type="color"
        defaultValue={"#f5f5f5"}
        placeholder="Choose a color.."
        name="color"
        onChange={(e) => onValueChange(e)}
      />
      <Button onClick={() => onCreateNote()} variant="outlined">
        Create
      </Button>
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default CreateNote;
