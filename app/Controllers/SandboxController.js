import { ProxyState } from "../AppState.js";
import { sandboxService } from "../Services/SandboxService.js";


//Private
function _draw() {
let template = ""
ProxyState.myPokemons.forEach(z => {
    template += `<li class="action hover-action" onclick="app.sandboxSpellsController.setActive('${z.id}')">${z.name}</li>`
})
document.getElementById("my-pokemons").innerHTML = template
}

//Public
export default class SandboxController {
  constructor() {
    ProxyState.on("myPokemons", _draw);

    this.getAllPokemons()
  }

async getAllPokemons(){
    try {
        await sandboxService.getAll()
    } catch (error) {
        console.error(error)
    }
}

async add(){
    try {
        await sandboxService.add()
    } catch (error) {
        console.log(error)
    }
}

async remove(){
    try {
         sandboxService.remove()
    } catch (error) {
        console.log(error)
    }
}

}

