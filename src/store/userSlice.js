import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => action.payload,
    removeUser: () => {},
  },
});

const userReducer = userSlice.reducer;

export const { addUser, removeUser } = userSlice.actions;
export default userReducer;
