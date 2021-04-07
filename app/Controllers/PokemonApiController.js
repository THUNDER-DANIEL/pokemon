import { ProxyState } from "../AppState.js";
import { pokemonApiService } from "../Services/PokemonApiService.js";


//Private
function _draw() {
let template = ""
ProxyState.apiPokemons.forEach(x =>{template +=`<li class="action hover-action" onclick="app.dndSpellApiController.getPokemon('${x.index}')">${x.name}</li>`})
document.getElementById('api-pokemons').innerHTML = template
}

function _drawActive(){
  document.getElementById('active-pokemon').innerHTML = ProxyState.activePokemon ? ProxyState.activePokemon.Template : "<p> NO Active Pokemon</p>"
}

//Public
export default class PokemonAPiController {
  constructor() {
    ProxyState.on("apiPokemons", _draw);
    ProxyState.on("activePokemon", _drawActive);



    this.getAllApi()

  }

  async getAllApi(){
    try {
      await pokemonApiService.getAllPokemons()
    } catch (error) {
      console.error(error)
    }
  }

  async getPokemon(index){
    try {
        await pokemonApiService.getPokemon(index)
    } catch (error) {
      console.error(error)
    }
  }

}



