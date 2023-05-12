import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import GoalForm from "./GoalForm";


const GoalList = () => {
    const [goals, setGoals] = useState([]);
    const [showAddFundsForm, setShowAddFundsForm] = useState(-1);
    const [fundsToAdd, setFundsToAdd] = useState(0);
    const [accountBalance, setAccountBalance] = useState(0);

    const handleGoalSave = (goal) => {
        setGoals((prevGoals) => [...prevGoals, goal]);
        setAccountBalance((prevBalance) => prevBalance - goal.amount);
    };

    const removeGoal = (index) => {
        const updatedGoals = [...goals]
        updatedGoals.splice(index, 1);
        setGoals(updatedGoals)
    };

    const addFunds = (index) => {
        setShowAddFundsForm(index)
    }

    const handleFundsFormSubmit = (e, index) => {
        e.preventDefault();
        const updatedGoals = [...goals];
        const fundsAdded = parseFloat(fundsToAdd)
        updatedGoals[index].amount += fundsAdded;
        setGoals(updatedGoals);
        setShowAddFundsForm(-1);
        setFundsToAdd(0);
        setAccountBalance((prevBalance) => prevBalance - fundsAdded)
    };

    return (
        <div style={{ marginTop: '25px', marginLeft: '250px' }}>
            <h2>Account Balance: ${accountBalance}</h2>
            <GoalForm onSave={handleGoalSave} />

            {goals.length > 0 ? (
                <div>
                    <h2>Saved Goals</h2>
                    <ul>
                        {goals.map((goal, index) => (
                            <li key={index}>
                                <h3>{goal.name}</h3>
                                <ProgressBar value={goal.amount} max={goal.max} />
                                <p>{`$${goal.amount} / $${goal.max}`}</p>
                                <button onClick={() => removeGoal(index)}>Remove Goal</button>
                                <button onClick={() => addFunds(index)}>Add Funds</button>
                                {showAddFundsForm === index && (
                                    <form onSubmit={(e) => handleFundsFormSubmit(e, index)}>
                                        <input
                                            type="number"
                                            placeholder="Enter funds to add"
                                            value={fundsToAdd}
                                            onChange={(e) => setFundsToAdd(e.target.value)}
                                        />
                                        <button type="submit">Add</button>
                                    </form>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Save a goal!</p>
            )}
        </div>
    );
};


export default GoalList