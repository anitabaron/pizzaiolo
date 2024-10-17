import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "ENG",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.language = state.language === "ENG" ? "PL" : "ENG";
    },
  },
});

export const { toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
