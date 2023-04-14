import React from "react";

const EndScreen = (props) => {
    const { onClick } = props;

    return (
        <div id="endScreen">
            Perfect!
            <button>Play again</button>
        </div>
    );
};

export default EndScreen;