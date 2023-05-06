import { React, useRef, useEffect, useState } from 'react'; // Imports react
import { Chart } from 'chart.js/auto'; // Imports necessary modules

const intervals = {
    '1 Month': 1,
    '3 Months': 3,
    '6 Months': 6,
    '1 Year': 12,
};

const AccountBalanceChart = ({ timeInterval }) => {
    const chartRef = useRef(null);
    const [currentInterval, setCurrentInterval] = useState('1 Month');

    useEffect(() => {
        // Gets the user balance as well as a min and max vaule
        let balance = [100, 120, 80, 200, 150, 300, 250, 400, 350, 500, 450, 600];
        let minBalance = Math.min(...balance);
        let maxBalance = Math.max(...balance);

        let months = intervals[currentInterval];

        let labels = Array.from({ length: months }, (_, i) => {
            const date = new Date();
            date.setMonth(date.getMonth() - (months - i - 1));
            return new Intl.DateTimeFormat('en-US', { month: 'short', year: '2-digit' }).format(date);
        });
        console.log(labels);


        // Defines the chart data
        let data = {
            datasets: [
                {
                    label: 'Account balance',
                    data: balance.slice(12 - months),
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
                        duration: 3000 / data.datasets[0].data.length,
                        from: null,
                        to: balance[-1],
                        delay(ctx) {
                            if (ctx.type !== 'data' || ctx.xStarted) {
                                return 0;
                            }
                            ctx.xStarted = true;
                            return ctx.index * 3000 / data.datasets[0].data.length;
                        },
                        
                    },
                    y: {
                        type: 'number',
                        easing: 'linear',
                        duration: 3000 / data.datasets[0].data.length,
                        delay(ctx) {
                            if (ctx.type !== 'data' || ctx.yStarted) {
                                return 0;
                            }
                            ctx.yStarted = true;
                            return ctx.index * 3000 / data.datasets[0].data.length;
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
                        suggestedMin: minBalance,
                        suggestedMax: maxBalance,
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

        if (chartRef && chartRef.current) {
            const chart = new Chart(chartRef.current, config);
            return () => chart.destroy();
        }
    }, [currentInterval]);

    const handleIntervalChange = (event) => {
        const selectedInterval = event.target.value;

        if (selectedInterval === '1 Month') {
            const currentDate = new Date();
            const pastDate = new Date();
            pastDate.setDate(currentDate.getDate() - 30);
            setCurrentInterval({
                label: 'Last 30 Days',
                startDate: pastDate,
                endDate: currentDate,
            });
        } else {
            setCurrentInterval(intervals[selectedInterval])
        }
    };

    return (
        <div style={{ marginTop: '25px', marginLeft: '250px' }}>
            <div style={{ display: 'flex', width: '50%', justifyContent: 'space-between' }}>
                <button onClick={() => setCurrentInterval('1 Month')}>1 Month</button>
                <button onClick={() => setCurrentInterval('3 Months')}>3 Months</button>
                <button onClick={() => setCurrentInterval('6 Months')}>6 Months</button>
                <button onClick={() => setCurrentInterval('1 Year')}>1 Year</button>
            </div>
            <div style={{ display: 'flex', width: '50%' }}>
                <canvas style={{ width: '100%', height: '200px' }} ref={chartRef} />
            </div>
        </div>

    );

};

// Exports the chart component
export default AccountBalanceChart;