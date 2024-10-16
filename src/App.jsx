import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Flour from "./pages/Flour";
import People from "./pages/People";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flour" element={<Flour />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </>
  );
}

export default App;
