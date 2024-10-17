import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipeSlice";
import languageReducer from "./languageSlice";

export const store = configureStore({
  reducer: {
    recipe: recipeReducer,
    language: languageReducer,
  },
});
