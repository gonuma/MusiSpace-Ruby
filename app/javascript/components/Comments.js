import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeComments, addComment } from "../redux/commentSlice";
import axios from "axios";
import { Grid, Box, Button, Hidden } from "@material-ui/core";

export default function Comments() {
  const { currentSong } = useSelector((state) => state.currentSong);
  const { comments } = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  let currentUser = document
    .getElementById("username")
    .innerText.split("e, ")[1]
    .split("!")[0];

  const temp = [];
  const commentSetter = async () => {
    await axios.get("/api/v1/songs").then((res) => {
      for (const comment of res.data.included) {
        if (comment.attributes.song_id === currentSong.id) {
          temp.push({
            body: comment.attributes.body,
            poster: comment.attributes.commenter,
          });
        }
      }
      dispatch(changeComments(temp));
    });
  };

  const commentDisplay = () => {
    return comments.map((comment) => {
      return (
        <Grid
          item
          xs={12}
          style={{
            marginBottom: "1vh",
          }}
        >
          <Box border={1} padding={1}>
            {`${comment.poster} - ${comment.body}`}
          </Box>
        </Grid>
      );
    });
  };

  useEffect(() => {
    commentSetter();
    commentDisplay();
  }, [currentSong]);

  useEffect(() => {
    commentDisplay();
  }, [comments]);

  return (
    <Grid container id="fullComments">
      <Grid item style={{ marginLeft: "2vw" }}>
        <Button
          variant="contained"
          onClick={() => {
            let comment = document.getElementById("commentInput").value;
            document.getElementById("commentInput").value = null;
            dispatch(addComment({ body: comment, poster: currentUser }));
            axios.post("/api/v1/comments", {
              body: comment,
              song_id: currentSong.id,
              commenter: currentUser,
            });
          }}
        >
          Submit
        </Button>
        <input id="commentInput" placeholder="What do you think?"></input>
        <Grid
          item
          xs={12}
          style={{
            // backgroundColor: "red",
            marginTop: "2vh",
          }}
        >
          {commentDisplay()}
        </Grid>
      </Grid>
    </Grid>
  );
}
