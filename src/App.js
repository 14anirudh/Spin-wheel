import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Wheel from "./components/Wheel";
import Result from "./components/Result";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spin" element={<Wheel />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
