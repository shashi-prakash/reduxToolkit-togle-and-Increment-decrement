import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: false,
};
const toggleSlice = createSlice({
  name: "toggle",
  initialState: initialState,
  reducers: {
    toggleSwitch(state) {
      state.active = !state.active;
    },
  },
});

export const { toggleSwitch } = toggleSlice.actions;
export default toggleSlice.reducer;
