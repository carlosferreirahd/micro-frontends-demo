import React, { useState } from 'react';

import "./index.css";

export function Counter({
  from = "",
}) {

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>from: {from}</p>
      <p>count: {count}</p>
      <button onClick={() => setCount(currCount => currCount + 1)}>
        increase
      </button>
    </div>
  );
}
