import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { sandboxApi } from "./AxiosService.js"


class SandboxService{
async remove(){
    await sandboxApi.delete(ProxyState.activePokemon.id)
    ProxyState.myPokemons = ProxyState.myPokemons.filter(z => z.id !== ProxyState.activePokemon.id)
    ProxyState.activePokemon = null
}
setActive(id){
    let pokemonz = ProxyState.myPokemons.find(w => w.id === id)
    ProxyState.activePokemon = pokemonz
}
async getAll(){
    let rez = await sandboxApi.get('')
    ProxyState.myPokemons = rez.data.map(p => new Pokemon(p))
}
async add(){
    let res = await sandboxApi.post('',ProxyState.activePokemon)
    ProxyState.myPokemons = [...ProxyState.myPokemons, new Pokemon(res.data)]
}

}


export const sandboxService = new SandboxService();
