import React, { useState, useEffect } from "react";
import './styles/reset.css';
import './styles/styles.css';
import CardField from "./components/cardField";
// import Card from "./components/card";

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [cardDeck, setCardDeck] = useState([
    {key: 1, clicked: false},
    {key: 2, clicked: false},
    {key: 3, clicked: false},
    {key: 4, clicked: false},
    {key: 5, clicked: false},
    {key: 6, clicked: false},
    {key: 7, clicked: false},
    {key: 8, clicked: false},
    {key: 9, clicked: false},
    {key: 10, clicked: false},
    {key: 11, clicked: false},
    {key: 12, clicked: false},
    {key: 13, clicked: false},
    {key: 14, clicked: false},
    {key: 15, clicked: false},
    {key: 16, clicked: false},
    {key: 17, clicked: false},
    {key: 18, clicked: false},
    {key: 19, clicked: false},
    {key: 20, clicked: false},
    {key: 21, clicked: false},
    {key: 22, clicked: false},
    {key: 23, clicked: false},
    {key: 24, clicked: false},
    {key: 25, clicked: false},
  ])

  useEffect(() => {
    const checkMove = (e) => {
      const chosenCard = e.target;
      console.log(chosenCard);
    };

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
    };

    const shuffleCards = () => {
      for (let i = cardDeck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cardDeck[i], cardDeck[j]] = [cardDeck[j], cardDeck[i]];
      }
      setCardDeck(cardDeck)
    };

    const resetButton = document.getElementById("resetButton")
    resetButton.addEventListener("click", resetGame)

    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      card.addEventListener("click", checkMove);
      card.addEventListener("click", increaseScore);
      card.addEventListener("click", shuffleCards);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener("click", increaseScore);
        // card.removeEventListener("click", shuffleCards);
      });
  
      resetButton.removeEventListener("click", resetGame);
    };

  }, [score, best, cardDeck])



  return (
    <div className="App">
      <div id="pageHeader">
        Points: {score}
        Best: {best}
        <button id="resetButton">Reset</button>
      </div>
      <div id="pageBody">
        <CardField cardDeck={cardDeck}/>
      </div>
    </div>
  );
}

export default App;
