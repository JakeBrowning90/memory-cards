import React, { useState, useEffect, useCallback } from "react";
import './styles/reset.css';
import './styles/styles.css';
import CardField from "./components/cardField";
import blooper from './components/img/blooper.webp';
import bobomb from './components/img/bobomb.webp';
import bowser from './components/img/bowser.webp';
import bowserjr from './components/img/bowserjr.webp';
import bulletbill from './components/img/bulletbill.webp';
import cheepcheep from './components/img/cheepcheep.webp';
import daisy from './components/img/daisy.webp';
import diddykong from './components/img/diddykong.webp';
import donkeykong from './components/img/donkeykong.webp';
import drybones from './components/img/drybones.webp';
import goomba from './components/img/goomba.webp';
import hammerbro from './components/img/hammerbro.webp';
import kamek from './components/img/kamek.webp';
import koopa from './components/img/koopa.webp';
import lakitu from './components/img/lakitu.webp';
import luigi from './components/img/luigi.webp';
import mario from './components/img/mario.webp';
import paratroopa from './components/img/paratroopa.webp';
import peach from './components/img/peach.webp';
import piranhaplant from './components/img/piranhaplant.webp';
import rosalina from './components/img/rosalina.webp';
import toad from './components/img/toad.webp';
import waluigi from './components/img/waluigi.webp';
import wario from './components/img/wario.webp';
import yoshi from './components/img/yoshi.webp';

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [cardDeck, setCardDeck] = useState([
    {key: 1, img: mario, clicked: false},
    {key: 2, img: luigi, clicked: false},
    {key: 3, img: peach, clicked: false},
    {key: 4, img: bowser, clicked: false},
    {key: 5, img: daisy, clicked: false},
    {key: 6, img: wario, clicked: false},
    {key: 7, img: waluigi, clicked: false},
    {key: 8, img: rosalina, clicked: false},
    {key: 9, img: kamek, clicked: false},
    {key: 10, img: donkeykong, clicked: false},
    {key: 11, img: diddykong, clicked: false},
    {key: 12, img: toad, clicked: false},
    {key: 13, img: yoshi, clicked: false},
    {key: 14, img: bowserjr, clicked: false},
    {key: 15, img: piranhaplant, clicked: false},
    {key: 16, img: koopa, clicked: false},
    {key: 17, img: paratroopa, clicked: false},
    {key: 18, img: bulletbill, clicked: false},
    {key: 19, img: lakitu, clicked: false},
    {key: 20, img: bobomb, clicked: false},
    {key: 21, img: hammerbro, clicked: false},
    {key: 22, img: goomba, clicked: false},
    {key: 23, img: drybones, clicked: false},
    {key: 24, img: cheepcheep, clicked: false},
    {key: 25, img: blooper, clicked: false},
  ])

  const playTurn = (e) => {
    console.log(e.target.dataset.key)
    const chosenCard = cardDeck.find(card => card.key == e.target.dataset.key);
    console.log(chosenCard)
    if (chosenCard.clicked == false) {
      markCardClicked(chosenCard.key)
      increaseScore();
      updateBest(); 
    } else {
      resetScore();
      resetCards();
    }
      shuffleCards();
  };

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

  const markCardClicked = (key) => {
    setCardDeck(cardDeck.map(card => {
      if (card.key === key) {
        // Create a *new* object with changes
        return { ...card, clicked: true };
      } else {
        // No changes
        return card;
      }
    }));
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
      {key: 1, img: mario, clicked: false},
      {key: 2, img: luigi, clicked: false},
      {key: 3, img: peach, clicked: false},
      {key: 4, img: bowser, clicked: false},
      {key: 5, img: daisy, clicked: false},
      {key: 6, img: wario, clicked: false},
      {key: 7, img: waluigi, clicked: false},
      {key: 8, img: rosalina, clicked: false},
      {key: 9, img: kamek, clicked: false},
      {key: 10, img: donkeykong, clicked: false},
      {key: 11, img: diddykong, clicked: false},
      {key: 12, img: toad, clicked: false},
      {key: 13, img: yoshi, clicked: false},
      {key: 14, img: bowserjr, clicked: false},
      {key: 15, img: piranhaplant, clicked: false},
      {key: 16, img: koopa, clicked: false},
      {key: 17, img: paratroopa, clicked: false},
      {key: 18, img: bulletbill, clicked: false},
      {key: 19, img: lakitu, clicked: false},
      {key: 20, img: bobomb, clicked: false},
      {key: 21, img: hammerbro, clicked: false},
      {key: 22, img: goomba, clicked: false},
      {key: 23, img: drybones, clicked: false},
      {key: 24, img: cheepcheep, clicked: false},
      {key: 25, img: blooper, clicked: false},
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