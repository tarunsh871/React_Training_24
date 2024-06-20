import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increments = [1, 10, 22, 6, 28];

  const increment = (value) => {
    setCount(count + value);
  };

  const decrement = (value) => {
    setCount(count - value);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <div>
        {increments.map((inc) => (
          <button key={inc} onClick={() => increment(inc)}>
            +{inc}
          </button>
        ))}
      </div>
      <div>
        {increments.map((dec) => (
          <button key={dec} onClick={() => decrement(dec)}>
            -{dec}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Counter;
