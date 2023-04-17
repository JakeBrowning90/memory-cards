import React from "react";

const StartScreen = (props) => {
    const { onClick } = props;

    return (
        <div id="startScreen" className="popUp">
            <h1 className="popHeader">How to Play:</h1>
            <ul className="popBody">
                <li>Click all 25 cards without repeating yourself!</li>
                <li>If you click the same card twice, your score will reset.</li>
                <li>Forgot your place? Click the "Reset" button to start over!</li>
            </ul>
            <button id="startButton" className="popFooter" onClick={onClick}>Start!</button>
        </div>
    );
};

export default StartScreen;