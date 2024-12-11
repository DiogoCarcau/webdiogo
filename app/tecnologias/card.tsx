import React from "react";
import { Tecnologia } from "../models/interface";

export default function Card({
  title,
  image,
  description,
  rating,
}: Tecnologia) {
  return (
    <section className="bg-[var(--background)] border rounded-xl shadow-xl hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 flex flex-col">
      {/* Imagem */}
      <article className="overflow-hidden rounded-t-xl pt-4">
        <img
          src={image}
          alt={title}
          className="w-full h-36 object-contain"
        />
      </article>

      {/* Corpo */}
      <article className="p-4 flex-grow">
        <h2 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>
          {title}
        </h2>
        <p className="text-sm" style={{ color: "var(--primary-light)" }}>
          {description}
        </p>
      </article>

      {/* Rodapé */}
      <article className="p-4 border-t flex justify-between items-center">
        <span className="text-sm text-yellow-500">
          {rating}⭐
        </span>
      </article>
    </section>
  );
}
