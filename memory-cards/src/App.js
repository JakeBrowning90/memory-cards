import React, { useState, useEffect } from "react";
import './styles/reset.css';
import './styles/styles.css';
import Card from "./components/card";

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [cardDeck, setCardDeck] = useState([
    {face: "1"},
    {face: "2"},
    {face: "3"},
    {face: "4"},
    {face: "5"},
  ])

  useEffect(() =>{
    const increaseScore = () => {
      setScore(score + 1);
      updateBest();
    };

    const resetGame = () => {
      setScore(0);
    };

    const updateBest = () => {
      if (score == best) {
        setBest(best + 1)
      }
    }

    const resetButton = document.getElementById("resetButton")
    resetButton.addEventListener("click", resetGame)

    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      card.addEventListener("click", increaseScore);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener("click", increaseScore);
      });
  
      resetButton.removeEventListener("click", resetGame);
    };

  }, [score])



  return (
    <div className="App">
      <div id="pageHeader">
      Points: {score}
      Best: {best}
      <button id="resetButton">Reset</button>
      </div>
      <div id="pageBody">
        <div id="cardField">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
