import React, { useState } from 'react';

const BabyShowerGame = () => {
    const [score, setScore] = useState(0);
    const [message, setMessage] = useState('');

    const handleCorrectAnswer = () => {
        setScore(score + 1);
        setMessage('Correct! 🎉');
    };

    const handleWrongAnswer = () => {
        setMessage('Oops! Try again. 😢');
    };

    return (
        <div className="baby-shower-game">
            <h2>Baby Shower Game</h2>
            <p>Score: {score}</p>
            <div className="question">
                <p>What is the most popular baby name of 2023?</p>
                <button onClick={handleCorrectAnswer}>Liam</button>
                <button onClick={handleWrongAnswer}>John</button>
                <button onClick={handleWrongAnswer}>Emma</button>
            </div>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default BabyShowerGame;