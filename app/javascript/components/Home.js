import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./Header";
import SongList from "./SongList";
import VideoPlayer from "./VideoPlayer";
import CommentSidebar from "./CommentSidebar";
import { Grid, Box, Button } from "@material-ui/core";

const api_key = process.env.REACT_APP_API_KEY;
const resultLimit = 1;

export default function Home() {
  return (
    <Grid container>
      <Grid item xs={5} md={2}>
        <Box
          style={{
            height: "94.3vh",
            marginRight: "0.05%",
          }}
        >
          <SongList api_key={api_key} resultLimit={resultLimit} />
        </Box>
      </Grid>
      <Grid item xs={6} md={9}>
        <VideoPlayer />
        <Box style={{ marginTop: "0.3vh" }}>
          <Header api_key={api_key} resultLimit={resultLimit} />
        </Box>
      </Grid>
      <Grid item xs={1} md={1}>
        <Box style={{ backgroundColor: "darkslategrey", height: "94.3vh" }}>
          <CommentSidebar />
        </Box>
      </Grid>
    </Grid>
  );
}
