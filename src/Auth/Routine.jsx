import React, { useState } from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";

const Routine = () => {
    const habits = [
        "Wake Up at 5:45 am", 
        "Morning walk Daily", 
        "Plan Your Day in the Morning", 
        "Read at least 2 hours",  
        "Learn Something New", 
        "Sleep for 7-8 hours", 
        "Eat Healthy Meals", 
        "Drink 5 Glasses of Water",  
        "Use less than 2 hours of social media", 
        "Take Regular Breaks", 
        "Avoid Procrastination", 
        "Coding at least 2 hours", 
        "Spend Time with Family and Friend", 
        "Remove bad word", 
        "Limit  negative impact", 
        "Whatever talk think the result of what you talk"
    ];

    const [loading, setLoading] = useState(false);
    const [botReply, setBotReply] = useState('');
    const getCurrentWeek = () => {
        const today = new Date();
        const startOfYear = new Date(today.getFullYear(), 0, 1);
        const dayOfYear = ((today - startOfYear + 86400000) / 86400000); 
        return Math.ceil(dayOfYear / 7); 
    };

    const updateHabitStatus = async (habit, status) => {
        setLoading(true);
        const week = getCurrentWeek(); 

        try {
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ habit, status, week })
            };
            await fetch('https://profilemsg-default-rtdb.firebaseio.com/routine.json', options);

            toast.success(`${habit} marked as ${status} for week ${week} successfully`, {
                position: "top-center",
            });
            setBotReply(`Status for "${habit}" updated to "${status}" for week ${week}.`);
        } catch (error) {
            alert("Something went wrong!!");
        }
        setLoading(false);
    };

    return (
        <div>
            {loading && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                    <AiOutlineLoading3Quarters className="text-white text-6xl animate-spin" />
                </div>
            )}
            
            <div className='bg-dark-50 text-white lg:px-32 md:px-20 px-2 pt-2 '>
                <div className='bg-yellow-50 rounded shadow md:p-10 p-2'>
                    <h1 className='text-black font-bold text-2xl text-center mb-10 font-mont'>Daily Routine</h1>

                    <div className="habit-list text-sm">
                        {habits.map((habit, index) => (
                            <div key={index} className="habit-item flex justify-between items-center mb-2 p-2 bg-white rounded shadow">
                                <span className="text-black font-semibold text-sm">{habit}</span>
                                <div className="buttons flex gap-2">
                                    <button onClick={() => updateHabitStatus(habit, 'Bad')} className="bg-red-600 text-white rounded px-3 py-1">Bad</button>
                                    <button onClick={() => updateHabitStatus(habit, 'Equi')} className="bg-yellow-600 text-white rounded px-3 py-1">Equi</button>
                                    <button onClick={() => updateHabitStatus(habit, 'Best')} className="bg-green-600 text-white rounded px-3 py-1">Best</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {botReply && (
                        <div className="mt-6 bg-green-100 p-4 rounded border border-green-300 shadow-lg">
                            <p className="text-green-800 font-semibold">{botReply}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Routine;
