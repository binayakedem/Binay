import React, { useEffect, useState, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, LinearScale, CategoryScale, BarElement, Legend, Tooltip } from 'chart.js';
import { auth } from './firebase'; 
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db1 } from './firebase'; 
import { ref, onValue } from 'firebase/database';

Chart.register(LinearScale, CategoryScale, BarElement, Legend, Tooltip);

const Progress = () => {
    const [user, setUser] = useState(null);
    const [routineData, setRoutineData] = useState([]);
    const chartRef = useRef(null); 
    const navigate = useNavigate();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                toast.error("Please log in to view your profile");
                navigate("/login");
            }
        });
        return unsubscribe;
    }, [navigate]);
    useEffect(() => {
        const routineRef = ref(db1, 'routine');
        onValue(routineRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const loadedData = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                }));
                setRoutineData(loadedData);
            } else {
                setRoutineData([]);
            }
        });
    }, []);
    const calculateCounts = (filteredData) => {
        let badCount = 0;
        let equiCount = 0;
        let bestCount = 0;

        filteredData.forEach(routine => {
            if (routine.status === 'Bad') badCount++;
            else if (routine.status === 'Equi') equiCount++;
            else if (routine.status === 'Best') bestCount++;
        });

        return [badCount, equiCount, bestCount];
    };

    const groupByWeek = () => {
        const weekGroups = {};

        routineData.forEach((routine) => {
            const week = routine.week;
            if (!weekGroups[week]) {
                weekGroups[week] = [];
            }
            weekGroups[week].push(routine);
        });

        return weekGroups;
    };
    const generateChartData = (weekData) => {
        const weekCounts = calculateCounts(weekData);

        return {
            labels: ['Bad', 'Equi', 'Best'],
            datasets: [
                {
                    label: `Week ${weekData[0]?.week} `,
                    data: weekCounts,
                    backgroundColor: [
                        'rgba(200, 10, 10, 1)', 
                        'rgba(54, 162, 235, 0.2)', 
                        'rgba(75, 255, 19, 0.2)', 
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)', 
                        'rgba(54, 162, 235, 1)',
                        'rgba(75, 192, 192, 1)', 
                    ],
                    borderWidth: 1,
                },
            ],
        };
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1,
                },
            },
        },
    };
    const weekGroups = groupByWeek();

    if (!user) return null;

    return (
        <div className=''>
            {Object.keys(weekGroups).map((week) => {
                const weekData = weekGroups[week];
                const chartData = generateChartData(weekData);

                return (
                    <div key={week} style={{ width: '80%', height: '400px', margin: 'auto', marginBottom: '20px' }}>
        
                        <Bar ref={chartRef} data={chartData} options={options} />
                    </div>
                );
            })}
        </div>
    );
};

export default Progress;
