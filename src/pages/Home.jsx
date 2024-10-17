import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { translations } from "../features/translations";
import { selectLanguage } from "../redux/selectors";

function Home() {
  const language = useSelector(selectLanguage);
  const t = translations[language];
  return (
    <div>
      <h1>{t.homeTitle}</h1>
      <p>{t.selectMethod}</p>
      <Link to="/flour">
        <button>{language === "ENG" ? "By Flour Amount" : "Ilość mąki"}</button>
      </Link>
      <Link to="/people">
        <button>
          {" "}
          {language === "ENG" ? "By Number of People" : "Liczba osób"}
        </button>
      </Link>
    </div>
  );
}

export default Home;
