import React from "react";

const EndScreen = (props) => {
    const { onClick } = props;

    return (
        <div id="endScreen">
            Perfect!
            <button id="restartButton" onClick={onClick}>Play again</button>
        </div>
    );
};

export default EndScreen;