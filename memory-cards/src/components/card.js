import React from "react";

const Card = (props) => {
    const { face } = props;

    return (
        <div data-key={face} className="card">
            {face}
        </div>
    );
};

export default Card;