/**
 *  Helper
 * 
 *  - 1° método: realiza una petición a una api
 *  - 2° método: objeto de colores según el tipo 
 *  de pokemón. 
 * 
 */
export const peticionAPI = async (url) => {
    try{

        const respuesta = await fetch(url);
        const json = await respuesta.json(); 

        return construirObjeto(json); 
    
    } catch(e){
        console.log(e); 
    } 
}

export const construirObjeto = (json) => {
    return {
        id: json.id,
        name: json.name,
        base_experience: json.base_experience,
        height: json.height,
        weight: json.weight,
        types: json.types.map(type => type.type["name"]),
        sprite: json.sprites["front_default"],
        sprite_animated: json.sprites["versions"]["generation-v"]["black-white"]["animated"]["front_default"],
    }
}

export const colores = {
    fire: "#FF7F00",
    water: "#B0E2FF",
    electric: "#FFD700",
    poison: "#CC88BB",
    grass: "#99FF66",
    bug: "#99CC33", 
    normal: "#DDCCAA",
    flying: "#BAAAFF",
    ground: "#DEB887",
    fairy: "#FFB0FF",
    fighting: "#FF6A6A",
    psychic: "#FFB5C5",
    rock: "#CD853F",
    steel: "#CCCCCC",
    ice: "#ADD8E6",
    ghost: "#778899",
    dragon: "#AB82FF"
}
