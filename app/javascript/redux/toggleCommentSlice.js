import { createSlice } from "@reduxjs/toolkit";

export const toggleCommentSlice = createSlice({
  name: "toggleCommentSlice",
  initialState: {
    commentToggle: false,
  },
  reducers: {
    toggleCommentsOn: (state) => {
      state.commentToggle = true;
    },
    toggleCommentsOff: (state) => {
      state.commentToggle = false;
    },
  },
});

export const { toggleCommentsOn, toggleCommentsOff } =
  toggleCommentSlice.actions;
export default toggleCommentSlice.reducer;
