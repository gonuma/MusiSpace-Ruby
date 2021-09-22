import { createSlice } from "@reduxjs/toolkit";

export const songListSlice = createSlice({
  name: "songListSlice",
  initialState: {
    songList: [],
  },
  reducers: {
    addSong: (state, action) => {
      state.songList.push(action.payload);
    },
    removeSong: (state, action) => {
      state.songList = action.payload;
    },
    // newList: (state, action) => {
    //   console.log(action.payload);
    //   state.songList = action.payload;
    // },
  },
});

export const { addSong, removeSong } = songListSlice.actions;
export default songListSlice.reducer;
