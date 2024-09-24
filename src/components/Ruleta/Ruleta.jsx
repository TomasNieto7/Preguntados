import React from 'react';

const Ruleta = () => {
  const elementos = Array.from({ length: 10 }, (_, i) => `Elemento ${i + 1}`);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-64 h-64 rounded-full border-4 border-gray-300 flex justify-center items-center">
        {elementos.map((elemento, index) => {
          const angle = (index / elementos.length) * 360;
          return (
            <div
              key={index}
              className="absolute w-16 h-16 bg-blue-500 text-white flex justify-center items-center rounded-full"
              style={{
                transform: `rotate(${angle}deg) translate(8rem) rotate(-${angle}deg)`,
              }}
            >
              {elemento}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ruleta;
