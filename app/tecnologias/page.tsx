"use client";

import React from "react";
import Card from "./card";
import tecnologias from "@/data/tecnologias.json";
export default function Page() {
  return (
    <section className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Tecnologias</h1>
      <article className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {tecnologias.map((tec,index) => (
          <Card
            key={index}
            id={index}
            title={tec.title}
            image={tec.image}
            description={tec.description}
            rating={tec.rating}
          />
        ))}
      </article>
      </section>
  );
}