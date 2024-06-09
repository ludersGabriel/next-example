'use client';

import {
  Pokemon,
  getPokemon,
} from '@/api-layer/pokemon-api/queries/pokemon.query';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

function blockSync(ms: number) {
  const start = Date.now();

  let now = start;
  while (now - start < ms) {
    now = Date.now();
  }
}

export default function SlowComponent() {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(
    undefined
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);

      const response = await getPokemon('pikachu');

      setPokemon(response);
      setLoading(false);
    };

    fetchPokemon();
  }, []);

  blockSync(200);

  if (loading || !pokemon) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <Image
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        priority
        width={300}
        height={300}
      />
    </div>
  );
}

export const MemoSlow = React.memo(SlowComponent);
