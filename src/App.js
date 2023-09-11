import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Wheel from "./components/Wheel";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spin" element={<Wheel />} />
      </Routes>
    </div>
  );
}

export default App;
