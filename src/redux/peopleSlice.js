import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flour: "",
  water: "",
  yeast: "",
  people: "",
};

const peopleSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { updateField } = peopleSlice.actions;
export const formReducer = peopleSlice.reducer;
