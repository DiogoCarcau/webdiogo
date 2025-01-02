import React, { useState } from "react";
import { CardProps } from "../models/interface";
import { SortFilterProps } from "../models/interface";



export default function Card({ addToCart, ... props }: CardProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(props);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1000);
  };

  return (
    <section className="bg-white border rounded-xl shadow-xl hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 flex flex-col">
      <article className="overflow-hidden rounded-t-lx pt-10">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-36 object-contain"
        />
      </article>
      <article className="p-4 flex-grow">
        <h2 className="text-lg font-bold text-black-800">
          {props.title}
        </h2>
        <p className="text-sm text-purple-600 italic font-bold pb-2">
          {props.category}
        </p>
        <p className="text-sm text-black-600">
          {props.description}
        </p>
      </article>
      <article className="p-4 border-t flex justify-between items-center">
        <span className="text-lg font-bold text-blue-600">
          {props.price.toFixed(2)}€
        </span>
        <article className="text-sm text-yellow-600 flex items-center">
          {props.rating.rate}🌟{" "}
          <span className="text-black-600 ml-2">({props.rating.count})</span>
        </article>
      </article>
      <button
        onClick={handleAddToCart}
        className={`w-full py-2 rounded transition-colors duration-200 
          bg-purple-600 hover:bg-purple-500 text-white`}
      >
        {isAdded ? 'Adicionado com sucesso' : 'Adicionar ao seu Carrinho'}
      </button>
    </section>
  );
}