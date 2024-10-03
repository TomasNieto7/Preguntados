import React, { useState } from 'react';

const LuckyBlock = ({ comodinLB, setFlagModalLB }) => {
    const [message, setMessage] = useState("Click me to see your luck!");
    const [flag, setFlag] = useState(false);

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
        if (flag === false) {
            const randomIndex = Math.floor(Math.random() * outcomes.length);
            const selectedMessage = outcomes[randomIndex];

            // Actualiza el mensaje
            setMessage(selectedMessage);
            
            // Verifica si hay un número entre paréntesis en el mensaje
            const match = selectedMessage.match(/\((\d+)\)/); // Busca un número dentro de "()" en el mensaje
            if (match) {
                const numberInParens = parseInt(match[1], 10); // Extrae el número y lo convierte a entero
                comodinLB(numberInParens, flag); // Llama a setIndiceLB con el número
            }
            // Cambia el flag para que no se pueda volver a ejecutar
            setFlag(true);
            setFlagModalLB(true)
        }
    };

    return (
        <div 
            onClick={getRandomOutcome} 
            className="flex justify-center items-center h-64 w-64 bg-yellow-400 hover:bg-yellow-500 text-white 
            font-bold py-4 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 select-none"
        >
            {message}
        </div>
    );
};

export default LuckyBlock;
