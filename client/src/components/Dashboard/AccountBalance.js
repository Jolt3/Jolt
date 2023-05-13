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
        // Defines interval as whichever interval is selected
        let interval = intervals[currentInterval];
        let labels = [];

        // Defines the chart data
        let data = {
            datasets: [
                {
                    label: 'Account balance',
                    data: [],
                    borderColor: 'green',
                    backgroundColor: '#00ff0080',
                    borderWidth: 3,
                    radius: 3,
                },
            ],
            labels: [],
        };
        
        // Creates a daily amount to display for the one month option
        if (interval === 30) {
            let oneMonthBalance = [100, 100, 80, 930, 860, 810, 378, 378, 378, 336, 1186, 1124, 1071, 991, 776, 776, 1616, 1316, 1268, 1245, 1245, 1245, 1184, 2034, 2034, 2004, 1961, 1611, 1579, 1229]; // Add User account balances
            const today = new Date();
            for (let i = interval - 1; i >= 0; i--) {
                const date = new Date(today);
                date.setDate(today.getDate() - i);
                const formattedDate = formatDate(date)
                labels.push(formattedDate)

                // Formats the date for the graphs x-axis to display the day, month and year
                function formatDate(date) {
                    const month = date.toLocaleString('en-US', { month: 'short' });
                    const day = date.toLocaleString('en-US', { day: 'numeric' });
                    return `${day} ${month}`
                }
            }
            data.labels = labels;
            data.datasets[0].data = oneMonthBalance;
            // Handles the 3 month, 6 month and 1 year option
        } else {
            const monthlyBalance = [1351, 581, 953, 874, 523, 957, 501, 620, 311, 100, 1616, 2034] // Add User account balances
            for (let i = 0; i < interval; i++) {
                const date = new Date();
                date.setMonth(date.getMonth() - (interval - i - 1));
                const formattedDate = formatDate(date);
                labels.push(formattedDate);

                // Formats the date for the graphs x-axis to show the month and year
                function formatDate(date) {
                    const month = date.toLocaleString('en-US', { month: 'short' });
                    const year = date.toLocaleString('en-US', { year: 'numeric' });
                    return `${month} ${year}`
                }
            }
            data.labels = labels
            // Shows data based on which interval you have selected
            data.datasets[0].data = monthlyBalance.slice(-interval)
        }

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