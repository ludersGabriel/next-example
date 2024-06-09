import { pokeClient } from '@/api-layer/client';

export type Pokemons = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

export const getPokemons = async (
  pagination = ''
): Promise<Pokemons> => {
  try {
    const response = await pokeClient.get(`pokemon${pagination}`);

    return {
      ...response.data,
      next: response.data.next?.split('pokemon')[1] ?? null,
      previous: response.data.previous?.split('pokemon')[1] ?? null,
    };
  } catch {
    return {
      count: 0,
      next: null,
      previous: null,
      results: [],
    };
  }
};

export type Pokemon = {
  name: string;
  sprites: {
    front_default: string;
  };
};

export const getPokemon = async (
  name: string
): Promise<Pokemon | undefined> => {
  try {
    const response = await pokeClient.get(`pokemon-form/${name}`);

    return response.data;
  } catch {
    return undefined;
  }
};
