import { createSlice } from '@reduxjs/toolkit';
import { proportions } from '../../constants/proportions';

const initialState = {
  flour: 0,
  people: 0,
  recipe: { flour: 0, water: 0, honey: '', yeast: 0, salt: 0 },
};

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    setFlour: (state, action) => {
      state.flour = action.payload;

      const matchingProportion = Object.values(proportions).find(
        (proportion) => proportion.flour === state.flour
      );

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
