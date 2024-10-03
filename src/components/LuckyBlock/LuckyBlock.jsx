// LuckyBlock.js
import React, { useState } from 'react';

const LuckyBlock = () => {
    const [message, setMessage] = useState("Click me to see your luck!");

    // Lista de posibles resultados
    const outcomes = [
        "You got a Diamond! (2)",
        "Try again!",
        "You found Gold! (1)",
        "Better luck next time!",
        "Jackpot! 🎉 (3)",
        "Oops, nothing this time!",
    ];

    // Función para generar un resultado aleatorio
    const getRandomOutcome = () => {
        const randomIndex = Math.floor(Math.random() * outcomes.length);
        setMessage(outcomes[randomIndex]);
    };

    return (
        <div onClick={getRandomOutcome} className="flex justify-center items-center h-64 w-64 bg-yellow-400 hover:bg-yellow-500 text-white 
        font-bold py-4 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            {message}
        </div>
    );
};

export default LuckyBlock;
