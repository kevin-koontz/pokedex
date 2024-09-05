import { Pop } from "../utils/Pop.js";
import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";
import { pokeDexPokemonsService } from "../services/PokeDexService.js";
import { api } from "../services/AxiosService.js";

export class PokeDexController {
  constructor() {
    console.log('PokeDex controller loaded!');
    AppState.on('pokeDexPokemon', this.drawPokeDexPokemons)

    this.getPokeDexPokemons()
  }

  drawPokeDexPokemons() {
    const pokemons = AppState.pokeDexPokemon
    let pokemonHTML = ''
    pokemons.forEach(pokemon => {
      pokemonHTML += `
      <div class="d-flex">
        <i>👾</i>
        <p>Bulbasaur</p>
      </div>
    `
    })
    setHTML('pokeDex-pokemons-list', pokemonHTML)
  }

  async getPokeDexPokemons() {
    try {
      await pokeDexPokemonsService.getPokeDexPokemons()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }

}