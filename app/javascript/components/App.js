import React from "react";
import Header from "./Header";
import SongList from "./SongList";
import VideoPlayer from "./VideoPlayer";
import CommentSidebar from "./CommentSidebar";
import "../app.css";
import { Grid, Box } from "@material-ui/core";

const api_key = "AIzaSyATC2pMRysYmjn2-88IrLySAkhM3TMxlNI";
const resultLimit = 1;

export default function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box mb={2}>
          <Header api_key={api_key} resultLimit={resultLimit} />
        </Box>
      </Grid>
      <Grid item xs={2}>
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
      <Grid item xs={9}>
        <VideoPlayer />
      </Grid>
      <Grid item xs={1}>
        <CommentSidebar />
      </Grid>
    </Grid>
  );
}
