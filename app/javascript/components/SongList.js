import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../redux/songListSlice";
import { changeSong } from "../redux/currentSongSlice";
import axios from "axios";
import { Grid, Box, Button } from "@material-ui/core";

export default function SongList(props) {
  const { api_key } = props;
  const { songList } = useSelector((state) => state.songList);
  const { currentSong } = useSelector((state) => state.currentSong);
  const dispatch = useDispatch();

  const songListSetter = async () => {
    await axios.get("/api/v1/songs").then((res) => {
      // const temp = [];
      for (const track of res.data.data) {
        console.log(track.attributes);
        dispatch(
          addSong({
            id: track.attributes.id,
            band: track.attributes.band,
            title: track.attributes.title,
            url: track.attributes.url,
            img_url: track.attributes.img_url,
          })
        );
      }
    });
  };

  const listPopulator = () => {
    return songList.map((song) => {
      return (
        <Grid container justifyContent="center">
          <Box
            mb={1}
            style={{ cursor: "pointer" }}
            onClick={() =>
              dispatch(
                changeSong({
                  id: song.id,
                  title: song.title,
                  band: song.band,
                  url: song.url,
                })
              )
            }
          >
            <Grid item xs={12}>
              <Button
                variant="outlined"
                style={{ width: "100%" }}
              >{`${song.band} - ${song.title}`}</Button>
            </Grid>
            <Grid item xs={12}>
              <img
                src={`https://i.ytimg.com/vi/${song.img_url}/mqdefault.jpg`}
              />
            </Grid>
          </Box>
        </Grid>
      );
    });
  };

  useEffect(() => {
    listPopulator();
  }, [songList]);

  useEffect(() => {
    songListSetter();
  }, []);

  return (
    <Grid
      container
      id="songList"
      justifyContent="center"
      style={{
        // backgroundColor: "red",
        overflowX: "scroll",
        overflowY: "scroll",
        height: "89.5vh",
      }}
    >
      <h1 onClick={() => console.log(songList, currentSong, api_key)}>
        Recent Songs
      </h1>
      {listPopulator()}
    </Grid>
  );
}
