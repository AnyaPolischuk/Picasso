import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  page: 0
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    increasePage(state) {
      state.page += 1;
    },
  }
})

export const { increasePage } = postSlice.actions;
export const selectPage = (state) => state.posts.page;

export default postSlice.reducer;