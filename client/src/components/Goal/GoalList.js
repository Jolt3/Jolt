import React, { useState, useRef, useEffect } from "react";
import './goal.css'

const GoalList = () => {
    const [finalValue, setFinalValue] = useState(0);
    const [max, setMax] = useState(0);
    const progressRef = useRef(null);

    useEffect(() => {
        const progress = progressRef.current;
        if (progress) {
        progress.style.width = `${(finalValue / max) * 100}%`;
        progress.innerText = `${Math.ceil((finalValue / max) * 100)}%`;
        }
    }, [finalValue, max])

    const handleInputChange = (e) => {
        setFinalValue(parseInt(e.target.value, 10));
    }

    const handleMaxInputChange = (e) => {
        setMax(parseInt(e.target.value, 10));
    }

    return (
        <div style={{ marginTop: '25px', marginLeft: '250px' }}>
            <div className="progress">
                <div ref={progressRef} className="progress-done"></div>
            </div>

            <div className="inputContainer">
                <div>
                    <h3>Enter ammount</h3>
                    <input className="input" type="number" onChange={handleInputChange} />
                </div>
            </div>

            <div className="inputContainer">
                <div>
                    <h3>Target Amount</h3>
                    <input className="goal" type="number" onChange={handleMaxInputChange} />
                </div>
            </div>
        </div>
    )
}

export default GoalList