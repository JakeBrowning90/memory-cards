import React from "react";

const EndScreen = (props) => {
    const { onClick } = props;

    return (
        <div id="endScreen" className="popUp">
            <h1 className="popHeader">Well done!</h1>
            <h2 className="popBody">You're a Mario Memory Master!</h2>
            <button id="restartButton" className="popFooter" onClick={onClick}>Play again</button>
        </div>
    );
};

export default EndScreen;