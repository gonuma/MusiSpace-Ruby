import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleCommentsOn } from "../redux/toggleCommentSlice";
import Comments from "./Comments";
import { Grid, Button } from "@material-ui/core";

export default function CommentSidebar() {
  // const { commentToggle } = useSelector((state) => state.commentToggle);
  // const dispatch = useDispatch();

  //   const commentToggler = () => {
  //     dispatch(toggleComments());
  //   };
  const [commentView, setCommentView] = useState(false);

  return (
    <Grid
      item
      style={{
        height: "89.5vh",
        overflowX: "scroll",
        overflowY: "scroll",
        // backgroundColor: "navy",
      }}
    >
      <Button
        style={{ marginLeft: "1.15vw" }}
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
