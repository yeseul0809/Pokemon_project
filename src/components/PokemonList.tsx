"use client";
import { Pokemon } from "@/types/data";
import axios from "axios";
import React, { useEffect, useState } from "react";

export function PokemonList() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get("/api/pokemons");
        setPokemons(response.data);
      } catch (error) {
        console.error("포켓몬 리스트 가져오는 중에 에러 발생", error);
      }
    };
    fetchPokemons();
  }, []);

  return (
    <>
      <div className="grid grid-cols-6 gap-4 w-full mx-4">
        {pokemons.map((pokemon) => (
          <div
            className="flex-col border rounded-md border-gray-300 my-2 mx-2"
            key={pokemon.id}
          >
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h3 className="text-white text-lg font-bold mt-2 ">
              {pokemon.korean_name}
            </h3>
            <p className="text-white">도감번호 : {pokemon.id}</p>
          </div>
        ))}
      </div>
    </>
  );
}
