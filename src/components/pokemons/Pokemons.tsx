'use client';

import {
  Pokemon,
  getPokemons,
  type Pokemons,
} from '@/api-layer/pokemon-api/queries/pokemon.query';
import { useState } from 'react';
import PokemonFetch from './PokemonFetch';
import PokemonComponent from './Pokemon';

type PokemonsComponentProps = {
  pokemons: Pokemons;
  initialSelectedPokemon?: Pokemon;
};

export default function PokemonsComponent({
  pokemons: pokemonsProp,
  initialSelectedPokemon,
}: PokemonsComponentProps) {
  const [pokemons, setPokemons] = useState<Pokemons>(pokemonsProp);
  const [selectedPokemon, setSelectedPokemon] = useState<
    Pokemon | undefined
  >(initialSelectedPokemon);

  const handleNext = async () => {
    if (!pokemons.next) return;

    const newPokemons = await getPokemons(pokemons.next);

    setPokemons(newPokemons);
  };

  const handlePrev = async () => {
    if (!pokemons.previous) return;

    const newPokemons = await getPokemons(pokemons.previous);

    setPokemons(newPokemons);
  };

  return (
    <div className='flex justify-around h-[500px] w-full gap-2 p-4'>
      <div className='flex gap-4 flex-col flex-grow'>
        <ul className='flex gap-4 flex-col overflow-auto '>
          {pokemons.results.map((pokemon) => (
            <li key={pokemon.name}>
              <PokemonFetch
                setSelectedPokemon={setSelectedPokemon}
                name={pokemon.name}
              />
            </li>
          ))}
        </ul>
        <div className='flex gap-4'>
          <button
            onClick={handlePrev}
            className='border p-2 rounded hover:bg-blue-200 hover:text-black'
          >
            prev
          </button>
          <button
            onClick={handleNext}
            className='border p-2 rounded hover:bg-blue-200 hover:text-black'
          >
            next
          </button>
        </div>
      </div>
      <div className='flex-grow'>
        {selectedPokemon && (
          <PokemonComponent pokemon={selectedPokemon} />
        )}
      </div>
    </div>
  );
}
