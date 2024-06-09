import PokemonsComponent from '@/components/pokemons/Pokemons';
import {
  Pokemon,
  Pokemons,
  getPokemon,
  getPokemons,
} from '@/api-layer/pokemon-api/queries/pokemon.query';
import PrevNextComponent from '@/components/prev-next/PrevNext';

export default async function Home() {
  const pokemons: Pokemons = await getPokemons();
  const selectedPokemon: Pokemon | undefined = await getPokemon(
    pokemons.results[0].name
  );

  return (
    <main className='flex flex-col items-center justify-between p-4'>
      <PokemonsComponent
        pokemons={pokemons}
        initialSelectedPokemon={selectedPokemon}
      />

      <PrevNextComponent
        prev={{ title: 'home', lp: { href: '/' } }}
      />
    </main>
  );
}
