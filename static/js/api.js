export default class API {

// getCaracter(id){
//     fetch(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
//     }


async getCaracter(id){
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await response.json();
    return data;
    }


}
