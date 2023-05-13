import { React, useRef, useEffect, useState } from 'react'; // Imports react
import { Chart } from 'chart.js/auto'; // Imports necessary modules

// Assigns numerical values for each option representing how many months are in each option
const intervals = {
    '1 Month': 30,
    '3 Months': 3,
    '6 Months': 6,
    '1 Year': 12,
};

const AccountBalanceChart = () => {

    const chartRef = useRef(null);
    // Renders the page with the 1 month option selected
    const [currentInterval, setCurrentInterval] = useState('1 Month');

    useEffect(() => {
        // Gets the user balance as well as a min and max vaule
        let balance = [100, 120, 80, 200, 150, 300, 250, 400, 350, 500, 450, 600, 550, 700, 650, 800, 750, 900, 850, 1000, 950, 1100, 1050, 1200, 1150, 1300, 1250, 1400, 1350, 1500, 1450, 1600, 1550, 1700, 1650]; // Add User account balances
        // Defines months as whichever interval is selected
        let interval = intervals[currentInterval];

        // Assigns the labels to a formatted date based on whichever time interval is selected
        let labels = [];
        if (interval === 30) {
            const today = new Date()
            for (let i = interval - 1; i >= 0; i--) {
                const date = new Date(today);
                date.setDate(today.getDate() - i);
                const formattedDate = formatDate(date)
                labels.push(formattedDate)

                function formatDate(date) {
                    const month = date.toLocaleString('en-US', { month: 'short' });
                    const day = date.toLocaleString('en-US', { day: 'numeric' });
                    return `${day} ${month}`
                }
            }
        } else {
            for (let i = 0; i < interval; i++) {
                const date = new Date();
                date.setMonth(date.getMonth() - (interval - i - 1));
                const formattedDate = formatDate(date);
                labels.push(formattedDate);

                function formatDate(date) {
                    const month = date.toLocaleString('en-US', { month: 'short' });
                    const year = date.toLocaleString('en-US', { year: '2-digit' });
                    return `${month} ${year}`
                }
            }
        }
        console.log(labels);


        // Defines the chart data
        let data = {
            datasets: [
                {
                    label: 'Account balance',
                    data: balance.slice(balance.length - interval),
                    borderColor: 'green',
                    backgroundColor: '#00ff0080',
                    borderWidth: 3,
                    radius: 3,
                },
            ],
            labels: labels
        };

        // Defines the chart configuration
        let config = {
            type: 'line',
            data: data,
            options: {
                animation: {
                    x: {
                        type: 'number',
                        easing: 'linear',
                        duration: 550 / data.datasets[0].data.length,
                        from: NaN,
                        delay(ctx) {
                            if (ctx.type !== 'data' || ctx.xStarted) {
                                return 0;
                            }
                            ctx.xStarted = true;
                            return ctx.index * 550 / data.datasets[0].data.length;
                        },

                    },
                    y: {
                        type: 'number',
                        easing: 'linear',
                        duration: 550 / data.datasets[0].data.length,
                        delay(ctx) {
                            if (ctx.type !== 'data' || ctx.yStarted) {
                                return 0;
                            }
                            ctx.yStarted = true;
                            return ctx.index * 550 / data.datasets[0].data.length;
                        },
                    },
                },
                responsive: true,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Monthly Spending',
                            type: 'linear',
                        },
                        ticks: {
                            reverse: true,
                            labels: labels
                        },
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Account Balance',
                            type: 'linear',
                        },
                    },
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Account Balance Over Time'
                    },
                },
            },
        };

        // For switching between chart time intervals
        if (chartRef && chartRef.current) {
            // Creates a chart for the time interval you have selected
            const chart = new Chart(chartRef.current, config);
            // Destroys the previous chart time interval you had selected
            return () => chart.destroy();
        }
    }, [currentInterval]);

    return (
        <div className='account-chart-main'>
            <div className='account-chart'>
                <button className='account-chart-buttons' onClick={() => setCurrentInterval('1 Month')}>1 Month</button>
                <button className='account-chart-buttons' onClick={() => setCurrentInterval('3 Months')}>3 Months</button>
                <button className='account-chart-buttons' onClick={() => setCurrentInterval('6 Months')}>6 Months</button>
                <button className='account-chart-buttons' onClick={() => setCurrentInterval('1 Year')}>1 Year</button>
            </div>
            <div className='account-chart-graph'>
                <canvas ref={chartRef} />
            </div>
        </div>

    );

};

// Exports the chart component
export default AccountBalanceChart;