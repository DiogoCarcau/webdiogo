'use client'; // Necessário para interatividade no Next.js

import { useState } from 'react';

export default function CounterPage() {
  const [count, setCount] = useState(0); // Estado do contador

  return (
    <div>
      <h1>Hello mates!</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Aumenta</button>
    </div>
  );
}
