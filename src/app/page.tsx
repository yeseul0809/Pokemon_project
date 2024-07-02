import { PokemonList } from "@/components/PokemonList";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center font-dohyeon">
      <h1 className="text-white text-5xl text-center my-8">포켓몬 도감</h1>
      <PokemonList />
    </div>
  );
}
