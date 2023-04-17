import React from "react";

const Card = (props) => {
    const { onClick, card } = props;

    return (
        <div className="card" key={card.key}>
            <img src={card.img} onClick={onClick} data-key={card.key} className="cardImg"/>
        </div>
    );
};

export default Card;