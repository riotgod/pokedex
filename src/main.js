import getData from "./utils/getData.js";
import { pokemonListLink } from "./const.js";
console.log('xd')

const pokemonList = getData('https://pokeapi.co/api/v2/pokemon')

console.log(pokemonList.then(function(data){
    return {data} 
}))
