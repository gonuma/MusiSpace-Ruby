import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./Header";
import SongList from "./SongList";
import VideoPlayer from "./VideoPlayer";
import CommentSidebar from "./CommentSidebar";
import { Grid, Box, Button } from "@material-ui/core";

const api_key = "AIzaSyBfPHBlVhS2FknDZr6pxXkKP2NhA-zt0xY";
const resultLimit = 1;

export default function Home() {
  return (
    <Grid container>
      <Grid item xs={5} md={2}>
        <Box
          style={{
            height: "90vh",
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <SongList api_key={api_key} resultLimit={resultLimit} />
        </Box>
      </Grid>
      <Grid item xs={5} md={9}>
        <VideoPlayer />
      </Grid>
      <Grid item xs={2} md={1}>
        <CommentSidebar />
      </Grid>
      <Grid item xs={12} md={12}>
        <Box mb={2}>
          <Header api_key={api_key} resultLimit={resultLimit} />
        </Box>
      </Grid>
    </Grid>
  );
}
