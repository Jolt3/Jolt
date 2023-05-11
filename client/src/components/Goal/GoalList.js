import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import GoalForm from "./GoalForm";


const GoalList = () => {
    const [goals, setGoals] = useState([]);

    const handleGoalSave = (goal) => {
        setGoals((prevGoals) => [...prevGoals, goal]);
    };

    const removeGoal = (index) => {
            const updatedGoals = [...goals]
            updatedGoals.splice(index, 1);
            setGoals(updatedGoals)
    };

    // const addFunds = (index)

    return (
        <div style={{ marginTop: '25px', marginLeft: '250px' }}>
            <GoalForm onSave={handleGoalSave} />

            {goals.length > 0 ? (
                <div>
                    <h2>Saved Goals</h2>
                    <ul>
                        {goals.map((goal, index) => (
                            <li key={index}>
                                <h3>{goal.name}</h3>
                                <ProgressBar value={goal.amount} max={goal.max}/>
                                <p>{`$${goal.amount} / $${goal.max}`}</p>
                                <button onClick={() => removeGoal(index)}>Remove Goal</button>
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