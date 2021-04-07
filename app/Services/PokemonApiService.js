import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js"
import { pokemonApi } from "./AxiosService.js";

class PokemonApiService {
async getPokemon(index){
  let res = await pokemonApi.get(index)
  ProxyState.activePokemon = new Pokemon(res.data)
}
async getAllPokemons(){
  let res = await pokemonApi.get()
    ProxyState.apiPokemons = res.data.results
  
}



}

export const pokemonApiService = new PokemonApiService();

