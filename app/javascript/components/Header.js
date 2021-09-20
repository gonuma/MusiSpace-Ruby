import React from "react";
import axios from "axios";

export default function Header() {
  const uploadSong = () => {
    let band = document.getElementById("bandInput").value;
    let title = document.getElementById("titleInput").value;
    document.getElementById("bandInput").value = null;
    document.getElementById("titleInput").value = null;
    console.log(band, title);
    axios.post("/api/v1/songs", { band: band, title: title });
  };

  return (
    <div className="header">
      <h1>MusiSpace 2.0</h1>
      <div className="inputArea">
        <button onClick={() => uploadSong()}>Post Song</button>
        <input placeholder="Band Name" id="bandInput"></input>
        <input placeholder="Song Name" id="titleInput"></input>
      </div>
    </div>
  );
}
