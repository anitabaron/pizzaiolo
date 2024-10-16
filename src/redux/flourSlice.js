import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flour: "",
  water: "",
  yeast: "",
  people: "",
};

const flourSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { updateField } = flourSlice.actions;
export const flourReducer = flourSlice.reducer;
