import { useDispatch, useSelector } from "react-redux";
import { setFlour } from "../redux/recipeSlice";
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
        {" "}
        <option value="">Choose</option>
        {Array.from({ length: 10 }, (_, i) => i * 100 + 100).map((flour) => (
          <option key={flour} value={flour}>
            {flour}g
          </option>
        ))}
      </select>

      {selectedFlour && (
        <div>
          <h3>{t.heading}</h3>
          <p>
            {t.ingredientsF}: {recipe.flour}g
          </p>
          <p>
            {t.ingredientsW}: {recipe.water}ml
          </p>
          <p>
            {t.ingredientsY}: {recipe.yeast}g
          </p>
          <p>
            {t.ingredientsO}: {recipe.oil}ml
          </p>
          <p>{t.recipeSteps}</p>
        </div>
      )}
    </div>
  );
}

export default Flour;
