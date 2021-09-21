import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
  name: "commentSlice",
  initialState: {
    comments: [],
  },
  reducers: {
    changeComments: (state, action) => {
      state.comments = action.payload;
    },
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
  },
});

export const { changeComments, addComment } = commentSlice.actions;
export default commentSlice.reducer;
