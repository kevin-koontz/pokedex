import { AppState } from "../AppState.js";
import { pokeApi } from "./AxiosService.js";

class PokeDexPokemonsService {

  async getPokeDexPokemons() {
    const response = await pokeApi.get('pokemon/?limit=151')
    console.log('GOT 151 POKEMONS!', response.data);
    AppState.pokeDexPokemon = response.data.results
    console.log('pokemons in appstate', AppState.pokeDexPokemon);

  }

}

export const pokeDexPokemonsService = new PokeDexPokemonsService()