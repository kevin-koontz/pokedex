import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Pokemons } from "./models/Pokemons.js"

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  pokeDexPokemon = []

}

export const AppState = createObservableProxy(new ObservableAppState())