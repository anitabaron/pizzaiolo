import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flour: 0,
  people: 0,
  recipe: { water: 0, yeast: 0, oil: 0 },
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setFlour: (state, action) => {
      state.flour = action.payload;
      state.recipe = {
        water: state.flour,
        yeast: state.flour * 0.02,
        oil: state.flour * 0.2,
      };
    },
    setPeople: (state, action) => {
      const flourPerPerson = 100; // 100g flour per person
      state.people = action.payload;
      state.flour = state.people * flourPerPerson;
      state.recipe = {
        water: state.flour,
        yeast: state.flour * 0.02,
        oil: state.flour * 0.2,
      };
    },
  },
});

export const { setFlour, setPeople } = recipeSlice.actions;
export default recipeSlice.reducer;
