// A clean React Functional Component with a Hook
import React, { useState, useEffect } from 'react';

const DailyStreak = () => {
  const [count, setCount] = useState(365); // Representing your 365-day streak!

  useEffect(() => {
    console.log("Consistency is key!");
  }, [count]);

  return (
    <div>
      <h1>Current Coding Streak: {count} Days</h1>
      <button onClick={() => setCount(count + 1)}>Complete Today's Task</button>
    </div>
  );
};

export default DailyStreak;
