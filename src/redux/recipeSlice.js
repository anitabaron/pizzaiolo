import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flour: 0,
  people: 0,
  recipe: { flour: 0, water: 0, honey: "", yeast: 0, salt: 0 },
};

export const proportions = {
  1: { flour: 160, water: 105, honey: 0.5, yeast: 2, salt: 4 },
  2: { flour: 300, water: 200, honey: 0.5, yeast: 2, salt: 8 },
  3: { flour: 450, water: 300, honey: 0.5, yeast: 2, alt: 12 },
  4: { flour: 600, water: 400, honey: 0.75, yeast: 3, salt: 16 },
  5: { flour: 750, water: 500, honey: 0.75, yeast: 3, salt: 20 },
  6: { flour: 900, water: 600, honey: 1, yeast: 3, salt: 24 },
  7: { flour: 1050, water: 700, honey: 1, yeast: 4, salt: 28 },
  8: { flour: 1200, water: 800, honey: 1.5, yeast: 4, salt: 32 },
  9: { flour: 1350, water: 900, honey: 1.5, yeast: 4, salt: 36 },
  10: { flour: 1500, water: 1000, honey: 2, yeast: 5, salt: 40 },
  11: { flour: 1650, water: 1100, honey: 2, yeast: 5, salt: 44 },
  12: { flour: 1800, water: 1200, honey: 2.5, yeast: 5, salt: 48 },
  13: { flour: 1950, water: 1300, honey: 2.5, yeast: 6, salt: 52 },
  14: { flour: 2100, water: 1400, honey: 3, yeast: 6, salt: 56 },
  15: { flour: 2250, water: 1500, honey: 3, yeast: 6, salt: 60 },
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setFlour: (state, action) => {
      state.flour = action.payload;
      // Find the matching proportion based on flour amount
      const matchingProportion = Object.values(proportions).find(
        (proportion) => proportion.flour === state.flour
      );

      // If a matching proportion is found, set the recipe to those proportions
      if (matchingProportion) {
        state.recipe = {
          flour: matchingProportion.flour,
          water: matchingProportion.water,
          honey: matchingProportion.honey,
          yeast: matchingProportion.yeast,
          salt: matchingProportion.salt,
        };
      }
    },
    setPeople: (state, action) => {
      const peopleCount = action.payload;

      // Use the people count as the key to find the corresponding proportion
      if (proportions[peopleCount]) {
        const { flour, water, honey, yeast, salt } = proportions[peopleCount];
        state.people = peopleCount;
        state.flour = flour;
        state.recipe = { flour, water, honey, yeast, salt };
      }
    },
  },
});

export const { setFlour, setPeople } = recipeSlice.actions;
export default recipeSlice.reducer;
