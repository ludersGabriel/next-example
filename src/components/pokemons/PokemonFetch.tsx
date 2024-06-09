'use client';

import {
  Pokemon,
  getPokemon,
} from '@/api-layer/pokemon-api/queries/pokemon.query';
import { useState } from 'react';

type Props = {
  name: string;
  setSelectedPokemon: (pokemon: Pokemon) => void;
};

export default function PokemonFetchComponent({
  name,
  setSelectedPokemon,
}: Props) {
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = async () => {
    setLoading(true);

    const pokemon = await getPokemon(name);

    if (pokemon) setSelectedPokemon(pokemon);

    setLoading(false);
  };

  return (
    <button
      onClick={handleClick}
      className='border border-white p-2 rounded hover:bg-blue-200 hover:text-black'
      disabled={loading}
    >
      <h1>{name}</h1>
    </button>
  );
}
