import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { logo } from "./constants";

type Props = {};

const Header: React.FC = (props: Props) => {
  return (
    <AppBar color="transparent" position="static">
      <Toolbar>
        <img src={logo} alt="Logo" style={{ width: 30, marginRight: 10 }} />
        <Typography>Evernote</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
