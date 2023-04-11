import React from "react";

const Card = (props) => {
    const { face } = props;

    return (
        <div className="card">
            {face}
        </div>
    );
};

export default Card;