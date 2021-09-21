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
      console.log(action.payload);
      //   for (const song of state.songList) {
      //     if (song === action.payload) {
      //       console.log(`${action.payload} found!`);
      //     }
      //   }
    },
    // newList: (state, action) => {
    //   console.log(action.payload);
    //   state.songList = action.payload;
    // },
  },
});

export const { addSong, removeSong } = songListSlice.actions;
export default songListSlice.reducer;
