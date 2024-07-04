import axios from "axios";
import { Pokemon } from "@/types/data";
import Image from "next/image";
import { formatHeight, formatWeight } from "@/utils/format";
import Link from "next/link";
import { ReactElement } from "react";

interface DetailPageProps {
  params: {
    id: string;
  };
}

export default async function DetailPage({
  params,
}: DetailPageProps): Promise<ReactElement> {
  const { id } = params;

  try {
    const response = await axios.get(
      `http://localhost:3000/api/pokemons/${id}`
    );

    const pokemonData: Pokemon = response.data;
    console.log(pokemonData);

    return (
      <div className="w-[60%] flex flex-col items-center mx-auto bg-amber-300 rounded-xl my-10">
        <div className="w-full flex flex-col p-4 items-center justify-center bg-[rgba(255,0,0,0.73)] rounded-xl">
          <h1 className="text-5xl text-white">{pokemonData.korean_name}</h1>
          <p className="text-2xl text-black">No. {pokemonData.id}</p>
        </div>
        <div className="flex flex-row items-center mt-4">
          <Image
            src={pokemonData.sprites.front_default}
            alt={pokemonData.korean_name}
            width={400}
            height={400}
            priority
          />
          <div className="text-2xl m-4 space-y-4">
            <p>이름: {pokemonData.korean_name}</p>
            <p>키: {formatHeight(pokemonData.height)}</p>
            <p>몸무게: {formatWeight(pokemonData.weight)}</p>
            <div className="flex flex-row gap-12">
              <div className="flex flex-col">
                <h2>타입: </h2>
                <ul className="flex flex-row space-x-2">
                  {pokemonData.types.map((type, index) => (
                    <li
                      className="px-1 bg-green-500 text-white rounded"
                      key={index}
                    >
                      {type.type.korean_name}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2>특성: </h2>
                <ul className="flex flex-row space-x-2">
                  {pokemonData.abilities.map((ability, index) => (
                    <li
                      className="px-1 bg-orange-500 text-white rounded"
                      key={index}
                    >
                      {ability.ability.korean_name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center mb-6 ">
          <Image
            src="/pokeball.png"
            alt="Left Image"
            width={25}
            height={25}
            className="mr-2"
          />
          <h2 className="text-[rgba(255,0,0,0.73)] text-3xl"> 핵심기술 </h2>
          <Image
            src="/pokeball.png"
            alt="Left Image"
            width={25}
            height={25}
            className="ml-2"
          />
        </div>
        <div className="text-gray-500 text-xl mb-8 grid grid-cols-6 gap-3">
          {pokemonData.moves.map((move, index) => (
            <p key={index}>{move.move.korean_name}</p>
          ))}
        </div>
        <Link
          href="/"
          className="text-white text-3xl bg-[rgba(255,0,0,0.73)] rounded-lg p-2 mb-6 transition-all duration-100 hover:bg-[rgba(255,0,0,0.95)] "
        >
          뒤로가기
        </Link>
      </div>
    );
  } catch (error) {
    console.error("Error fetching Pokemon Detail data:", error);
    return <div>Error fetching Pokemon Detail data</div>;
  }
}
