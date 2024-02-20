import "./App.css";
import Cats from "./components/Cats";
import Dogs from "./components/Dogs";
import { useState, useEffect } from "react";

function App() {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    const randomizeVisitor = Math.random();
    if (randomizeVisitor > 0.5) {
      setVisitors(1);
    }
  }, []);

  const handleClick = () => {
    console.log({
      event: "ctaAdoptionClick",
      cta: "button",
      location: visitors === 0 ? "variantA" : "variantB",
    });
  };

  return (
    <>
      <h1>Adopt your lifelong companion</h1>
      {visitors ? <Cats /> : <Dogs />}
      <button onClick={handleClick} className="button">
        Adopt this {visitors ? "cat" : "dog"} today!
      </button>
    </>
  );
}

export default App;
