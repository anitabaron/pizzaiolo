import { useDispatch, useSelector } from "react-redux";
import { proportions, setFlour } from "../redux/recipeSlice";
import { useState } from "react";
import { translations } from "../features/translations";

function Flour() {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipe.recipe);
  const [selectedFlour, setSelectedFlour] = useState("");

  const handleFlourChange = (event) => {
    const flourAmount = Number(event.target.value);
    setSelectedFlour(flourAmount);
    if (flourAmount) dispatch(setFlour(flourAmount));
  };

  return (
    <div>
      <h2>{t.flourPageTitle}</h2>
      <select onChange={handleFlourChange} value={selectedFlour}>
        <option value="">Choose</option>
        {Object.values(proportions).map((proportion, index) => (
          <option key={index} value={proportion.flour}>
            {proportion.flour}g
          </option>
        ))}
      </select>

      {selectedFlour && (
        <div>
          <h3>{t.heading}</h3>
          <p>
            {t.ingredientsF}: {selectedFlour} g
          </p>
          <p>
            {t.ingredientsW}: {recipe.water} ml
          </p>
          <p>
            {t.ingredientsH}: {recipe.honey} tablespoon
          </p>
          <p>
            {t.ingredientsY}: {recipe.yeast} g
          </p>
          <p>
            {t.ingredientsS}: {recipe.salt} g
          </p>
          <p>{t.recipeSteps}</p>
        </div>
      )}
    </div>
  );
}

export default Flour;
