import type { Metadata } from "next";
import { PropsWithChildren } from "react";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;

  // fetch data
  const data = await fetch(`http://localhost:3000/api/pokemons/${id}`).then(
    (res) => res.json()
  );

  return {
    title: data.korean_name,
    description: `${data.korean_name}에 대한 내용`,
  };
}

export default function PokemonDetailLayout({ children }: PropsWithChildren) {
  return <>{children}</>;
}
