import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import GoalForm from "./GoalForm";
import { styles } from "plaid-threads/Touchable";


const GoalList = () => {
    const [goals, setGoals] = useState([]);
    const [showAddFundsForm, setShowAddFundsForm] = useState(-1);
    const [fundsToAdd, setFundsToAdd] = useState(0);
    const [accountBalance, setAccountBalance] = useState(0);

    const handleGoalSave = (goal) => {
        setGoals((prevGoals) => [...prevGoals, goal])
        console.log(goals)
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

    const ulStyle = {
      border: '1px solid #1e1e1e',
      listStyle: 'none',
      padding: '2%',
      borderRadius: '8px',
    }

    const container = {
        // position:'absolute',
        display: 'grid',
        gridtemplateColumns: '1fr 2fr',
        width:'70vw',
        zIndex:'9000'
    }

    return (
        <>
        <div className="goal-list-main" id="account-grid">

            <div>
                <div style={{ background: 'whitesmoke',  width: '35vw', paddingBottom:'10%', padding: '3%', borderRadius:'20px'}}>
                    <h2 style={{textAlign:'left', marginBottom:'4vh'}}>Account Balance: ${accountBalance}</h2>
                    <GoalForm onSave={handleGoalSave} />
                </div>
            </div>
                <div>
                        <div style={{ background: 'whitesmoke',  width: '47vw', height:'37.4vw', minHeight:'37.4vw', maxHeight:'37.4vw', padding: '3%', borderRadius:'20px', marginLeft:'5%', overflow:'scroll'}}>
                            <h2 style={{textAlign:'left', marginBottom:'4vh'}}>My Goals</h2>
                            <ul style={{listStyle:'none'}}>
                                {goals.map((goal, index) => (
                                    <li key={index}>
                                        <h3 style={{marginBottom:'1.2vh'}}>{goal.name}</h3>
                                        <ProgressBar value={goal.amount} max={goal.max} />
                                        <p  style={{marginTop:'2vh'}}>{`$${goal.amount} / $${goal.max}`}</p>
                                        <div style={{marginTop:'2vh'}}>
                                        <button className="budget-add goal-button-3" onClick={() => addFunds(index)}>Add Funds</button>
                                        <button className="budget-remove goal-button-2" style={{marginLeft:'2%'}} onClick={() => removeGoal(index)}>Remove</button>
                                        </div>
                                        {showAddFundsForm === index && (
                                            <form onSubmit={(e) => handleFundsFormSubmit(e, index)}>
                                                <input className="input-container-2"
                                                    type="number"
                                                    placeholder="Enter funds to add"
                                                    value={fundsToAdd}
                                                    onChange={(e) => setFundsToAdd(e.target.value)}
                                                />
                                                <button className="goal-button-add" type="submit">Add</button>
                                            </form>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                </div>
            </div>
        </>
    );
};


export default GoalList