import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@material-ui/core";

export default function VideoPlayer() {
  const { currentSong } = useSelector((state) => state.currentSong);
  return (
    <Box style={{ height: "89.5vh" }}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${currentSong.url}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Box>
  );
}
