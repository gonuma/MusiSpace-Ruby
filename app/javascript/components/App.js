import React from "react";
import Header from "./Header";
import SongList from "./SongList";
import VideoPlayer from "./VideoPlayer";
import "../app.css";

export default function App() {
  return (
    <div>
      <Header />
      <div className="songArea">
        <SongList />
        <VideoPlayer />
      </div>
      <div>Hell yus</div>
    </div>
  );
}
