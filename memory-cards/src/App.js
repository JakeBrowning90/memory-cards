import React, { useState, useEffect, useCallback } from "react";
import './styles/reset.css';
import './styles/styles.css';
import CardField from "./components/cardField";

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

  // useEffect(() => {}, [])

  const playTurn = (e) => {
    const chosenCard = cardDeck.find(card => card.key == e.target.dataset.key);
    console.log(chosenCard)
    if (chosenCard.clicked == false) {

      markCardClicked(chosenCard)
      increaseScore();
      updateBest(); 
    } else {
      resetScore();
      resetCards();
    }
      shuffleCards();
  };

  // const updateDeck = (chosenCard) => {
  //   const replaceIndex = cardDeck.indexOf(chosenCard)
  //   const updatedCard = {key: chosenCard.key, clicked: true}
  //   const updatedDeck = [...cardDeck.slice(0,replaceIndex ), updatedCard, ...cardDeck.slice(replaceIndex + 1)]
  //   return updatedDeck
  // }

  const increaseScore = () => {
    setScore(score + 1);
  };

  const resetScore = () => {
    console.log("Reset!")
    setScore(0);
  };

  const updateBest = () => {
    if (score == best) {
      setBest(best + 1)
    }
  };

  const markCardClicked = (chosenCard) => {
    const replaceIndex = cardDeck.indexOf(chosenCard)
    const updatedCard = {key: chosenCard.key, clicked: true}
    setCardDeck((cardDeck) => {
      const updatedDeck = [...cardDeck.slice(0,replaceIndex ), updatedCard, ...cardDeck.slice(replaceIndex + 1)]
      return updatedDeck    
    })
  };

  const shuffleCards = () => {
    setCardDeck((cardDeck) => {
      const shuffledDeck = [...cardDeck];
      for (let i = shuffledDeck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
          }
      return shuffledDeck    
    })
  };


  const resetCards = () => {
    setCardDeck([
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
  }

  return (
    <div className="App">
      <div id="pageHeader">
        Points: {score}
        Best: {best}
        <button id="resetButton" onClick={resetScore}>Retry</button>
      </div>
      <div id="pageBody">
        <CardField onClick={playTurn} cardDeck={cardDeck}/>
      </div>
    </div>
  );
}

export default App;
