
export default class Pokemon {
    constructor({name, weight, height, types, img, sprites}) {
        this.name= name
        this.weight = weight
        this.height =height
        this.types = types
        this.img = img || sprites.other.dream_world.front_default

    }




    get Template() {

        return /*html*/`

        <div class="bg-white p-3 shadow spell-card">
        <h1>${this.name}</h1>
        <hr>
        <h4>LEVEL: ${this.level === 0 ? 'Cantrip' : this.level} | DURATION: ${this.duration} | RANGE: ${this.range}</h4>
        <h4>COMPONENTS: ${this.components.join(', ')}</h4>
        <p>${this.description}</p>
      </div>
      ${this.Button}

        `
    }


    get Button() {
        if (this.id) {
          return '<button class="btn btn-outline-danger" onclick="app.sandboxController.remove()">Remove</button>'
        }
        return '<button class="btn btn-outline-info" onclick="app.sandboxController.add()">Add</button>'
      }

}
