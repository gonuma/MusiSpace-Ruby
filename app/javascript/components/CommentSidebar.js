import React, { useState } from "react";
import Comments from "./Comments";
import { Grid, Button } from "@material-ui/core";
import ChatIcon from "@mui/icons-material/Chat";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export default function CommentSidebar() {
  const [commentView, setCommentView] = useState(false);

  return (
    <Grid item>
      <Button
        // variant="outlined"
        style={{ marginTop: "1vh", marginLeft: "1.15vw", fontWeight: "bold" }}
        variant="contained"
        onClick={() => {
          setCommentView(!commentView);
        }}
      >
        <ChatIcon></ChatIcon>
      </Button>
      {commentView === true ? <Comments /> : null}
      <Button
        variant="contained"
        style={{ marginTop: "80vh", marginLeft: "1.15vw", fontWeight: "bold" }}
      >
        <AccountBoxIcon></AccountBoxIcon>
      </Button>
    </Grid>
  );
}
