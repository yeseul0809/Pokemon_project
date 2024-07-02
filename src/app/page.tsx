import { PokemonList } from "@/components/PokemonList";

export default function Home() {
  return (
    <div className="bg-black flex flex-col items-center">
      <h1 className="text-white text-3xl font-bold text-center my-2">
        포켓몬 도감
      </h1>
      <PokemonList />
    </div>
  );
}
