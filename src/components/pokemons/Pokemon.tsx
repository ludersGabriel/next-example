import { Pokemon } from '@/api-layer/pokemon-api/queries/pokemon.query';
import Image from 'next/image';

type Props = {
  pokemon: Pokemon;
};

export default function PokemonComponent({ pokemon }: Props) {
  return (
    <div className='flex flex-col items-center'>
      <h1>{pokemon.name}</h1>
      <Image
        width={300}
        height={300}
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
    </div>
  );
}
