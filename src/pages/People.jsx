import { useDispatch, useSelector } from "react-redux";
import { setPeople } from "../redux/recipeSlice";
import { useState } from "react";
import { translations } from "../features/translations";
import Recipe from "../components/Recipe";
import { selectLanguage } from "../redux/selectors";

function People() {
  const language = useSelector(selectLanguage);
  const t = translations[language];
  const dispatch = useDispatch();
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
        <option value="">{language === "ENG" ? "choose" : "wybierz"}</option>
        {Array.from({ length: 15 }, (_, i) => i + 1).map((people) => (
          <option key={people} value={people}>
            {people}
          </option>
        ))}
      </select>

      {selectedPeople && <Recipe />}
    </div>
  );
}

export default People;
