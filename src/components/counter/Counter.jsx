import React, { useState, useEffect } from 'react';

const Counter = ({ mount, index }) => {
    const [count, setCount] = useState(mount);

    useEffect(() => {
        setCount(mount);
    }, [index, mount]);

    useEffect(() => {
        if (count > 0) {
            const intervalId = setInterval(() => {
                setCount((prevCount) => prevCount - 1);
            }, 1000);
             
            return () => clearInterval(intervalId);
        }
    }, [count]);

    return (
        <div className="flex flex-col w-36 h-36 items-center justify-center">
            <h1 className="text-[5rem] font-bold mb-4 text-white">{count}</h1>
        </div>
    );
}

export default Counter;
