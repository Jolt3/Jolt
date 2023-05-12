import React, { useState } from 'react';
import './goal.css';

const GoalForm = ({ onSave }) => {
    const [goalName, setGoalName] = useState('');
    const [goalAmount, setGoalAmount] = useState(0);
    const [maxAmount, setMaxAmount] = useState(0);

    const handleNameChange = (e) => {
        setGoalName(e.target.value)
    }
    const handleGoalAmount = (e) => {
        setGoalAmount(parseInt(e.target.value), 10)
    }
    const handleMaxAmount = (e) => {
        setMaxAmount(parseInt(e.target.value), 10)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const goal = {
            name: goalName,
            amount: goalAmount,
            max: maxAmount
        };

        onSave(goal);

        setGoalName('');
        setGoalAmount(0);
        setMaxAmount(0);
    };


    const formStlye = {
        borderRadius: '8px',
        border: '1px solid #1e1e1e',
        padding: '3%',
        marginBottom: '6vh'
    }

    return (
        <form style={formStlye} onSubmit={handleSubmit}>
            <div className="inputContainer">
                <div>
                    <h3>Goal Name</h3>
                    <input
                        type="text"
                        value={goalName}
                        onChange={handleNameChange}
                    />
                </div>
            </div>

            <div className="inputContainer">
                <div>
                    <h3>Current</h3>
                    <input
                        type="number"
                        value={goalAmount}
                        onChange={handleGoalAmount}
                    />
                </div>
            </div>

            <div className="inputContainer">
                <div>
                    <h3>Goal</h3>
                    <input
                        type="number"
                        value={maxAmount}
                        onChange={handleMaxAmount}
                    />
                </div>
            </div>

            <button type="submit">Save Goal</button>
        </form>
    );
};

export default GoalForm