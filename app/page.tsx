"use client"; // Torna este arquivo um Client Component

import React, { useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
  useEffect(() => {
    // Adiciona a classe "home-body" ao body para estilizar a página Home
    document.body.classList.add("home-body");

    return () => {
      // Remove a classe "home-body" ao sair da página Home
      document.body.classList.remove("home-body");
    };
  }, []);

  return (
    <main className="mx-auto my-8 p-6 w-[80%] max-w-[600px] bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-white-800 text-center mb-4">
        React e Next.js
      </h1>
      <p className="text-gray-600 mb-6 text-center">
        Seja Bem-Vindo à minha aplicação em React e Next.js, estas são algumas
        das tecnologias mais utilizadas e vou dar um cheirinho de como brilhar
        nestas tecnologias!💻✨
      </p>

      <div className="text-center">
        <Link href="/counter" className="flex items-center justify-center gap-2 text-red-500 font-bold hover:text-red-700">
          <span>Clique para ir à página do Count</span>
          <img src="/tecnologias/seta.avif" alt="Seta" className="w-6 h-6" />
        </Link>
      </div>
    </main>
  );
}
