import { Link } from "react-router-dom";
import { toggleLanguage } from "../redux/languageSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Navigation() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  const handleLanguageSwitch = () => {
    dispatch(toggleLanguage());
  };
  return (
    <div className="navset">
      <nav>
        <Link to="/">{language === "ENG" ? "Home" : "Strona Główna"}</Link>
        {/* <Link to="/flour">{language === "ENG" ? "Flour" : "Mąka"}</Link> */}
        {/* <Link to="/people">{language === "ENG" ? "People" : "Ludzie"}</Link> */}
      </nav>
      <button onClick={handleLanguageSwitch}>
        {language === "ENG" ? "PL" : "ENG"}
      </button>
    </div>
  );
}
