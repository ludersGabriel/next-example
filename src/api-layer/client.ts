import axios from 'axios';

const POKE_URL = 'https://pokeapi.co/api/v2/';

export const pokeClient = axios.create({
  baseURL: POKE_URL,
});
