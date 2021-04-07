import PokemonApiController from "./Controllers/PokemonApiController.js";
import SandboxController from "./Controllers/SandboxController.js";


class App {
  pokemonApiController = new PokemonApiController();
  sandboxController = new SandboxController();
}

window["app"] = new App();
