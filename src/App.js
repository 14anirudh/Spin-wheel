import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Wheel from "./components/Wheel";
import Result from "./components/Result";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spin" element={<Wheel />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
