import React from "react";

const Card = (props) => {
    const { onClick, card } = props;

    return (
        <div className="card">
            <img src={card.img} onClick={onClick} data-key={card.key} className="cardImg"/>
            {/* {card.key} */}
        </div>
    );
};

export default Card;