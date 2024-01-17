// pokemon-card.tsx

import Link from "next/link";
import Image from "next/image";

interface PokemonCardProps {
  name: string;
  id: string;
}

export function PokemonCard({ name, id }: PokemonCardProps) {
  return (
    <>
      <Link
        href={name}
        className="group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        key={name + "Card"}
      >
        <h2 className={`text-2xl font-semibold`}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h2>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt={name}
          width={300}
          height={300}
        />
      </Link>
    </>
  );
}
