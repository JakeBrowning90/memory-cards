import React from "react";

const StartScreen = (props) => {
    const { onClick } = props;

    return (
        <div id="startScreen">
            <div>How to Play:</div>
            <ul>
                <li>Click all 25 cards without repeating yourself!</li>
                <li>If you click the same card twice, your score will reset.</li>
                <li>Forgot your place? Click the "Retry" button to start over!</li>
            </ul>
            <button id="startButton" onClick={onClick}>Start!</button>
        </div>
    );
};

export default StartScreen;