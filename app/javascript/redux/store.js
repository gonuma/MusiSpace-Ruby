import { configureStore } from "@reduxjs/toolkit";
import songListSlice from "./songListSlice";
import currentSongSlice from "./currentSongSlice";
import commentSlice from "./commentSlice";
import toggleCommentSlice from "./toggleCommentSlice";

export default configureStore({
  reducer: {
    songList: songListSlice,
    currentSong: currentSongSlice,
    comments: commentSlice,
    commentToggle: toggleCommentSlice,
  },
});
