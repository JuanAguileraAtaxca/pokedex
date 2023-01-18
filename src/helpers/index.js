
export const peticionAPI = async (url) => {
    const respuesta = await fetch(url);
    const json = await respuesta.json(); 
    
    return json; 
}
