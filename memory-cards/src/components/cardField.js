import React from "react";
import Card from "./card";

const CardField = (props) => {
    const { onClick, cardDeck } = props;

    return (
        <div id="cardField">
            {cardDeck.map((card) => {
                return <Card onClick={onClick} card={card} 
                // face={card.key}
                />
            })}
        </div>
    );
};

export default CardField;