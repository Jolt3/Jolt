import React from "react";
import './goal.css'

const ProgressBar = ({value, max}) => {
    const progressWidth = (value / max) * 100;

    return (
        <div className="progress">
            <div
            className="progress-done"
            style={{ width: `${progressWidth}%`}}
            ></div>
        </div>
    );
};

export default ProgressBar