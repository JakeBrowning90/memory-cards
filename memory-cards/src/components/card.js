import React from "react";

const Card = (props) => {
    const { onClick, face } = props;

    return (
        <div onClick={onClick} data-key={face} className="card">
            {face}
        </div>
    );
};

export default Card;