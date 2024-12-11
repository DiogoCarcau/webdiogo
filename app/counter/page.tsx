"use client"; // Necessário para interatividade no Next.js

import { useState, useEffect } from 'react';

export default function CounterPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Adiciona a classe "home-body" ao body para manter o fundo consistente
    document.body.classList.add("home-body");

    return () => {
      document.body.classList.remove("home-body");
    };
  }, []);

  return (
    <main className="mx-auto my-8 p-6 w-[80%] max-w-[600px] bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-4">Hello mates!</h1>
      <p className="text-gray-600 text-center text-2xl">{count}</p>
      <div className="text-center">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Aumenta
        </button>
      </div>
    </main>
  );
}
