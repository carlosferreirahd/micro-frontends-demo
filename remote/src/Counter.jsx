import React, { useState } from 'react';

import "./index.css";

export function Counter() {

  const [count, setCount] = useState(0);

  return (
    <div className='remote-counter'>
      <p>count: {count}</p>
      <button onClick={() => setCount(currCount => currCount + 1)}>
        increase
      </button>
    </div>
  );
}
