import React from "react";

const StartScreen = (props) => {
    const { onClick } = props;

    return (
        <div id="startScreen">
            <div>How to Play:</div>
            <ul>
                <li>Instructions 1</li>
                <li>Instructions 2</li>
                <li>Instructions 3</li>
            </ul>
            <button id="startButton" onClick={onClick}>Start!</button>
        </div>
    );
};

export default StartScreen;