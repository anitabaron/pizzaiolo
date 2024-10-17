import { toggleLanguage } from "../redux/languageSlice";
import { useDispatch, useSelector } from "react-redux";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { selectLanguage } from "../redux/selectors";

export default function Navigation() {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);

  const handleLanguageSwitch = () => {
    dispatch(toggleLanguage());
  };
  return (
    <div className={css.navSet}>
      <nav className={css.navLink}>
        <NavLink to="/">
          {language === "ENG" ? "Home" : "Strona Główna"}
        </NavLink>
        <NavLink to="/flour">{language === "ENG" ? "Flour" : "Mąka"}</NavLink>
        <NavLink to="/people">
          {language === "ENG" ? "People" : "Ludzie"}
        </NavLink>
      </nav>
      <button onClick={handleLanguageSwitch}>
        {language === "ENG" ? "PL" : "ENG"}
      </button>
    </div>
  );
}
