import React, { useState } from "react";
import Comments from "./Comments";
import { Grid, Button } from "@material-ui/core";

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
        style={{ marginTop: "1vh", marginLeft: "1.15vw", fontWeight: "bold" }}
        variant="contained"
        onClick={() => {
          setCommentView(!commentView);
        }}
      >
        Comments
      </Button>
      {commentView === true ? <Comments /> : null}
    </Grid>
  );
}
