import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {},
    deleteContact(state, action) {},
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
