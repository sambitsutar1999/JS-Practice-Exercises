import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(()=>{
        const timerID = setInterval(()=> tick(), 1000);
        return()=> clearInterval(timerID);
    }, []);

    const tick = () => {
        setDate(new Date());
    };

    return (
        <div>
        <h1>Current Time and Date</h1>
        <h2>{date.toLocaleTimeString()}</h2>
        <h2>{date.toLocaleDateString()}</h2>
        </div >
    );
};
export default Clock;