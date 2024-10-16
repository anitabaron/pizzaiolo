import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/flour">Flour</Link>
        <Link to="/people">People</Link>
      </nav>
    </div>
  );
}
