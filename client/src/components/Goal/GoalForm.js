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
        padding: '3%',
        marginBottom: '6vh'
    }

    return (
        <form style={formStlye} onSubmit={handleSubmit}>
            <div className="inputContainer">
                <div>
                    <h3 style={{ fontSize:'1.5vw'}}>Goal Name</h3>
                    <input className='input-container'
                        type="text"
                        value={goalName}
                        onChange={handleNameChange}
                    />
                </div>
            </div>

            <div className="inputContainer">
                <div>
                    <h3 style={{ fontSize:'1.5vw'}}>Current</h3>
                    <input className='input-container'
                        type="number"
                        value={goalAmount}
                        onChange={handleGoalAmount}
                    />
                </div>
            </div>

            <div className="inputContainer">
                <div>
                    <h3 style={{ fontSize:'1.5vw'}}>Goal</h3>
                    <input className='input-container'
                        type="number"
                        value={maxAmount}
                        onChange={handleMaxAmount}
                    />
                </div>
            </div>

            <button className='goal-button' type="submit">Save</button>
        </form>
    );
};

export default GoalForm