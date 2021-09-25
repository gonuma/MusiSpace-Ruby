import React, { useState } from "react";
import Comments from "./Comments";
import { Grid, Button } from "@material-ui/core";
import ChatIcon from "@mui/icons-material/Chat";

export default function CommentSidebar() {
  const [commentView, setCommentView] = useState(false);

  return (
    <Grid
      item
      style={{
        height: "89.5vh",
        overflowX: "scroll",
        overflowY: "scroll",
      }}
    >
      <Button
        variant="outlined"
        style={{ marginTop: "1vh", marginLeft: "1.15vw", fontWeight: "bold" }}
        variant="contained"
        onClick={() => {
          setCommentView(!commentView);
        }}
      >
        <ChatIcon></ChatIcon>
      </Button>

      {commentView === true ? <Comments /> : null}
    </Grid>
  );
}
