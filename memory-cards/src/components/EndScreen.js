import React from "react";

const EndScreen = (props) => {
    const { onClick } = props;

    return (
        <div id="endScreen">
            <div className="popHeader">Well done!</div>
            <div className="popBody">You're a Mario Memory Master!</div>
            <button id="restartButton" className="popFooter" onClick={onClick}>Play again</button>
        </div>
    );
};

export default EndScreen;