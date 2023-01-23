
export const peticionAPI = async (url) => {
    const respuesta = await fetch(url);
    const json = await respuesta.json(); 
    
    return json; 
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
