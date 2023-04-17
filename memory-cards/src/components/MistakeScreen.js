import React from "react";

const MistakeScreen = (props) => {
    const { lastCard, onClick } = props;

    return (
        <div id="mistakeScreen">
            <div className="popHeader">Whoops!</div>
            <div className="popBody">You clicked <img src={lastCard}/> twice!</div>
            <button id="restartButton" className="popFooter" onClick={onClick}>Try again</button>
        </div>
    );
};

export default MistakeScreen;