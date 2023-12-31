import React, { useState } from "react";
import "../SpinWheel.css"; 
import { Link } from "react-router-dom";
import actual from "../images/actual.png";

const Wheel: React.FC = () => {
  const [spinning, setSpinning] = useState<boolean>(false);
  const [result, setResult] = useState<string | null>(null); // Initialize result as null

  const probabilities = [
    { label: "30% SITEWIDE OFF", probability: 0.16 },
    { label: "BUY 1 GET 1 FREE", probability: 0.16 },
    { label: "FREE COFFEE MUG ON PURCHASE OF 1000+", probability: 0.16 },
    { label: "BUY 2 EFFERVESCENT TABLETS & GET 1 FREE", probability: 0.16 },
    { label: "FREE 50GM TEA ON PURCHASE OF RS.500", probability: 0.16 },
    { label: "HOT CHOCOLATE FREE WITH TEA", probability: 0.16 },
  ];

  const spinWheel = () => {
    if (spinning) return;
  
    const random = Math.random();
    let currentProbability = 0;
    let selectedSection: { label: string; probability: number } | null = null;
  
    for (const section of probabilities) {
      currentProbability += section.probability;
  
      if (random <= currentProbability) {
        selectedSection = section;
        break;
      }
    }
  
    setSpinning(true);
  
    setTimeout(() => {
      setResult(selectedSection?.label || null); // Update result here
      setSpinning(false);
    }, 3000);
  };
  
  localStorage.setItem("result", result || ""); // Set a default value for result

  return (
    <div className="spin-wheel-container masked">
      <div className="spin-wheel">
        <img
          src={actual}
          alt="Wheel"
          className={`w-88 h-80 image ${spinning ? "spin" : ""}`}
          style={{ animation: spinning ? "spin 5s linear infinite" : "" }}
        />
      </div>
      <button
        className="h-12 w-40 bg-[#146531] mt-8 rounded-xxl text-lg text-white font-bold"
        onClick={spinWheel}
        disabled={spinning}
      >
        Spin
      </button>
      {result && (
        <div className="result">
          <p>You won: {result}</p>
          <Link to="/result">
            <button className="mt-2 text-white bg-[#146531] border-0 py-2 px-6 font-bold focus:outline-none rounded-xxl text-lg">
              GET ACCESS CODE
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Wheel;
