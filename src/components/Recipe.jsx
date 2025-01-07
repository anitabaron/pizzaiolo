import { useSelector } from 'react-redux';
import { translations } from '../features/translations';
import { selectLanguage, selectPeople, selectRecipe } from '../redux/selectors';
import css from './Recipe.module.css';

export default function Recipe() {
  const language = useSelector(selectLanguage);
  const t = translations[language];
  const recipe = useSelector(selectRecipe);
  const people = useSelector(selectPeople);
  // const p = translations[language];

  return (
    <>
      <h3 className={css.recipeTitle}>{t.heading}</h3>
      <p>
        {t.ingredientsF}: {recipe.flour} g
      </p>
      <p>
        {t.ingredientsW}: {recipe.water} ml
      </p>
      <p>
        {t.ingredientsH}: {recipe.honey}{' '}
        {language === 'ENG' ? 'tablespoon' : 'łyżki'}
      </p>
      <p>
        {t.ingredientsY}: {recipe.yeast} g
      </p>
      <p>
        {t.ingredientsS}: {recipe.salt} g
      </p>
      <p>-----</p>
      <p>
        {' '}
        {language === 'ENG' ? 'Pizza dinner for:' : 'Pizza dla:'} {people}{' '}
        {language === 'ENG' ? 'people' : 'osób'}
      </p>

      <h3 className={css.recipeTitle}>{t.recipeStepsTitle}</h3>
      <p className={css.recipeParagraph}>{t.recipeStepsParagraph}</p>
      <h3 className={css.recipeTitle}>{t.recipeSouceTitle}</h3>
      <p className={css.recipeParagraph}>{t.recipeSouceParagraph}</p>
      <h3 className={css.recipeTitle}>{t.recipeBakeTitle}</h3>
      <p className={css.recipeParagraph}>{t.recipeBakeParagraph}</p>
      <div></div>
    </>
  );
}
