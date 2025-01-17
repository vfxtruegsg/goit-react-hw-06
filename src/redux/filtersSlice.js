import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, action) {},
  },
});

export const { changeFilter } = filterSlice.actions;
