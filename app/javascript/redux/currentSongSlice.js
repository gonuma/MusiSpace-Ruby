import { createSlice } from "@reduxjs/toolkit";

export const currentSongSlice = createSlice({
  name: "currentSongSlice",
  initialState: {
    currentSong: {
      title: "Careless Whisper",
      band: "George Michael",
      url: "izGwDsrQ1eQ",
    },
  },
  reducers: {
    changeSong: (state, action) => {
      state.currentSong = action.payload;
    },
  },
});

export const { changeSong } = currentSongSlice.actions;
export default currentSongSlice.reducer;
