import React, { useState, useEffect } from 'react';

const Counter = ({ mount, index, flag, handleEndGame}) => {
    const [count, setCount] = useState(mount);

    // Actualiza el contador cuando cambia el valor de mount o index
    useEffect(() => {
        setCount(mount);
    }, [index, mount]);

    // Controla el temporizador y lo detiene si flag es true o si count llega a 0
    useEffect(() => {
        if (!flag && count > 0) {
            const intervalId = setInterval(() => {
                setCount((prevCount) => prevCount - 1);
            }, 1000);

            return () => clearInterval(intervalId);
        }

        if (count === 0) {
            alert("Se te acabó el tiempo");
            handleEndGame()
        }
    }, [count, flag]);  // Dependencias: count y flag

    return (
        <div className="flex flex-col w-36 h-36 items-center justify-center">
            <h1 className="text-[5rem] font-bold mb-4 text-white">{count}</h1>
        </div>
    );
};

export default Counter;
