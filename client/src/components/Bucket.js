import { React, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);


// Provides colors to new data
const colors = {
    chartColors: [
        '#FF6384',
        '#3A87AD',
        '#F4C430',
        '#9C27B0',
        '#E67E22',
        '#5E8C31',
        '#FF4081',
        '#1ABC9C',
        '#D35400',
    ]
};


const DoughnutChart = () => {
    const [buckets, setBuckets] = useState([
        { name: 'Core', amount: 2000 }, // Add User account balance
    ]);
    const [newBucketName, setNewBucketName] = useState('');
    const [newBucketAmount, setNewBucketAmount] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [showAddBucket, setShowAddBucket] = useState(false);

    const addBucket = () => {
        if (newBucketAmount > buckets[0].amount) {
            setErrorMessage('Insufficient Funds');
            return
        }
        // Creates a new core amount formula by subtracting however much we are adding to the new bucket from the core and stores it in the variable
        const newCoreAmount = buckets[0].amount - newBucketAmount;
        const newBucket = { name: newBucketName, amount: newBucketAmount };
        // Holds the existing buckets and the new bucket
        const updatedBuckets = [...buckets, newBucket];
        // Updates the amount of the core
        updatedBuckets[0].amount = newCoreAmount;
        // Sets the buckets value to include the new bucket
        setBuckets(updatedBuckets);
        // Resets the input fields
        setNewBucketName('');
        setNewBucketAmount(0);
        setErrorMessage('')
    };

    // Removes a bucket function
    const removeBucket = (index) => {
        // Checks for the core index so the user can't delete that
        if (index !== 0) {
            // Creates a copy of all the buckets
            const updatedBuckets = [...buckets];
            // Removes the bucket at the specified index from the spread
            const removedBucket = updatedBuckets.splice(index, 1)[0];
            // Adds the deleted bucket amount back to the core
            const newCoreAmount = buckets[0].amount + removedBucket.amount;
            // Updates the core
            updatedBuckets[0].amount = newCoreAmount
            // Sets the core to the updated amount
            setBuckets(updatedBuckets);
        }
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Core Savings'
            }
        }
    };

    const data = {
        // Iterates over all of our buckets and displays the name as labels for the chart
        labels: buckets.map((bucket) => bucket.name),
        datasets: [
            {
                // Iterates over the buckets and assigns the amount as data for the chart
                data: buckets.map((bucket) => bucket.amount),
                // Assigns a color for the data block
                backgroundColor: colors.chartColors
            },
        ],
    };

    const toggleAddBucket = () => {
        setShowAddBucket(!showAddBucket)
    }
    return (
        <div style={{ marginTop: '25px', marginLeft: '250px' }}>
            {errorMessage && <p>{errorMessage}</p>}
            <div style={{ display: 'flex', width: '25%' }}>
                <Doughnut style={{ width: '100%', height: '200px' }} data={data} options={options} />
            </div>
            <div>
                {buckets.slice(1).map((bucket, index) => (
                    <div key={index}>
                        {bucket.name} - {bucket.amount}
                        <button onClick={() => removeBucket(index + 1)}>Remove Bucket</button>
                    </div>
                ))}
                {!showAddBucket && (
                    <button onClick={toggleAddBucket}>Add Bucket</button>
                )}
                {showAddBucket && (
                    <div>
                        <input
                            type="text"
                            value={newBucketName}
                            onChange={(e) => setNewBucketName(e.target.value)}
                            placeholder="Bucket Name"
                        />
                        <input
                            type="number"
                            value={newBucketAmount}
                            onChange={(e) => setNewBucketAmount(Number(e.target.value))}
                            placeholder="Amount to Add"
                        />
                        <button onClick={addBucket}>Confirm</button>
                        <button onClick={toggleAddBucket}>Cancel</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DoughnutChart