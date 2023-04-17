import React from "react";

const MistakeScreen = (props) => {
    const { lastCard, onClick } = props;

    return (
        <div id="mistakeScreen" className="popUp">
            <h1 className="popHeader">Whoops!</h1>
            <div className="popBody">
                <h2>You clicked </h2>
                <img src={lastCard}/> 
                <h2> twice!</h2>
            </div>
            <button id="restartButton" className="popFooter" onClick={onClick}>Try again</button>
        </div>
    );
};

export default MistakeScreen;