import { useDispatch, useSelector } from "react-redux";
import { setPeople } from "../redux/recipeSlice";
import { useState } from "react"; // <-- (1) Import useState
import { translations } from "../features/translations";

function People() {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipe.recipe);
  const [selectedPeople, setSelectedPeople] = useState("");

  const handlePeopleChange = (event) => {
    const peopleCount = Number(event.target.value);
    setSelectedPeople(event.target.value);
    if (peopleCount > 0) {
      dispatch(setPeople(peopleCount));
    }
  };

  return (
    <div>
      <h2>{t.peoplePageTitle}</h2>
      <select value={selectedPeople} onChange={handlePeopleChange}>
        <option value="">Choose</option>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((people) => (
          <option key={people} value={people}>
            {people}
          </option>
        ))}
      </select>

      {selectedPeople && (
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

export default People;
