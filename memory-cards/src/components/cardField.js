import React from "react";
import Card from "./card";

const CardField = (props) => {
    const { cardDeck } = props;

    return (
        <div id="cardField">
            {cardDeck.map((card) => {
                return <Card key={card.key} face={card.key}/>
            })}
        </div>
    );
};

export default CardField;