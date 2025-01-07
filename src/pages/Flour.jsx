import { useDispatch, useSelector } from 'react-redux';
import { setFlour } from '../redux/recipeSlice';
import { proportions } from '../../constants/proportions';
import { useState } from 'react';
import { translations } from '../features/translations';
import Recipe from '../components/Recipe';
import { selectLanguage } from '../redux/selectors';

function Flour() {
  const language = useSelector(selectLanguage);
  const t = translations[language];
  const dispatch = useDispatch();
  const [selectedFlour, setSelectedFlour] = useState('');

  const handleFlourChange = (event) => {
    const flourAmount = Number(event.target.value);
    setSelectedFlour(flourAmount);
    if (flourAmount) dispatch(setFlour(flourAmount));
  };

  return (
    <div className="container">
      <h2>{t.flourPageTitle}</h2>
      <h4>{t.flourPageAdd}</h4>
      <select onChange={handleFlourChange} value={selectedFlour}>
        <option value="">{language === 'ENG' ? 'choose' : 'wybierz'}</option>
        {Object.keys(proportions)
          .sort((a, b) => a - b)
          .map((key) => (
            <option key={key} value={proportions[key].flour}>
              {proportions[key].flour}g
            </option>
          ))}
      </select>

      {selectedFlour && <Recipe />}
    </div>
  );
}

export default Flour;
