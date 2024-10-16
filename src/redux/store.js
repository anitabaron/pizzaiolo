import { configureStore } from "@reduxjs/toolkit";
import { flourReducer } from "./FlourSlice";

export const store = configureStore({
  reducer: {
    form: flourReducer,
  },
});
