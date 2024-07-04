"use client";

import { Pokemon } from "@/types/data";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export function PokemonList() {
  const router = useRouter();

  const fetchPokemons = async () => {
    const response = await axios.get("/api/pokemons");
    return response.data;
  };

  const {
    data: pokemons,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["pokemons"],
    queryFn: fetchPokemons,
  });

  if (isPending) return <div>로딩 중..</div>;
  if (isError) return <div>포켓몬 리스트 가져오는 중 에러발생</div>;

  return (
    <div className="w-[80%] flex flex-col justify-center items-center mx-auto">
      <div className="grid grid-cols-6 gap-4 w-full mx-4 justify-items-center">
        {pokemons.map((pokemon: Pokemon) => (
          <div
            onClick={() => {
              router.push(`/pokemons/${pokemon.id}`);
            }}
            className="w-full flex flex-col items-center border rounded-md border-gray-300 my-2 mx-2 cursor-pointer hover:bg-red-700  hover:border-yellow-500"
            key={pokemon.id}
          >
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width={100}
              height={100}
              priority
            />
            <h3 className="text-yellow-500 text-2xl mt-2">
              {pokemon.korean_name}
            </h3>
            <p className="text-white text-lg mb-2">도감번호 : {pokemon.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
