import API from './api.js'
const api = new API()

const $characterContainer = document.querySelector('#character-container');


class Character{

    constructor({name, image, species,gender, status}){

        this.name = name;
        this.image = image;
        this.species = species;
        this.gender = gender;
        this.status = status;
        this.render();
    }

    build(){
        return `
        <article class="caracter">
                <div class="caracter-grid">
                <img class="character-image" src=${this.image} alt="">
                
                <div class="character-name">
                <h2>${this.name}</h2>
                </div>

                    <div class="character-labels">
                    <h3 class="character-label">Specie: ${this.species} </h3>
                    <h3 class="character-label">Género: ${this.gender} </h3>
                    <h3 class="character-label">Status: ${this.status} </h3>
                    </div>

                </div>
            </article>
            `
    }

render(){
    $characterContainer.innerHTML = this.build();
}

}


async function initApp(initID){
    const characterData = await api.getCaracter(initID);
    console.log(characterData)

    const rick = new Character(characterData);
}


initApp(5);
