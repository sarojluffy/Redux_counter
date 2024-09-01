import { createSlice } from "@reduxjs/toolkit";
const counter = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    addcount(state, action) {
      return (state += 1);
    },
    deletecount(state, action) {
      return (state -= 1);
    },
    addbynumber(state, action) {
      return (state += action.payload);
    },
  },
});
export const { addcount, deletecount, addbynumber } = counter.actions;
export default counter.reducer; //
