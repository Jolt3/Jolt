import React from "react";

const GoalList = () => {

    return (
        <div style={{ marginTop: '25px', marginLeft: '250px' }}>
        <div className="progess">
            <div className="progress-done">

            </div>
        </div>

        <div className="inputContainer">
        <div>
            <h3>Enter ammount</h3>
            <input className="input" type="number" />
        </div>
        </div>

        <div className="inputContainer">
        <div>
            <h3>Target Amount</h3>
            <input className="goal" type="number" />
        </div>
        </div>

        </div>
    )
}

export default GoalList