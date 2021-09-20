import React, { useState, useEffect } from "react";
import axios from "axios";
export default function SongList() {
  const [songList, setSongList] = useState([]);

  const songListSetter = async () => {
    await axios.get("/api/v1/songs").then((res) => {
      const temp = songList;
      for (const track of res.data.data) {
        temp.push({
          band: track.attributes.band,
          title: track.attributes.title,
          url: track.attributes.url,
        });
      }
      setSongList([...temp]);
    });
  };

  useEffect(() => {
    songListSetter();
  }, []);
  return (
    <div className="songList">
      <button onClick={() => console.log(songList)}>Click Here</button>
    </div>
  );
}
