import {useState, useEffect} from "react"; 
import Tipo from "./Tipo";
import styled from "@emotion/styled";


const Card = ({url}) => {
    const [pokemon, setPokemon] = useState({});
    const {id, nombre, imagen, tipos} = pokemon; 

    useEffect(() => {
        const peticionAPI = async () => {
            const respuesta = await fetch(url); 
            const resultado = await respuesta.json();
           
            const nuevoPokemon = {
                id: resultado.id, 
                nombre: resultado.name, 
                imagen:resultado.sprites.front_default,
                estadisticas: resultado.stats.map(stat => {
                    return {
                        estado: stat.base_stat,
                        nombre: stat.stat.name
                    }
                }),
                tipos: resultado.types.map(type => type.type.name),
            }
            setPokemon(nuevoPokemon); 
        }

        peticionAPI(); 
    }, []); 

    const Contenedor = styled.div`
        background-color: #F9F9F9; 
        border-radius: 10px; 
        display: flex; 
        flex-direction: row-reverse; 
        justify-content: space-between; 
        padding: 20px;
    `;

    const ContenedorCaracteristicas = styled.div`
        display: flex; 
        flex-direction: column; 
        justify-content: center; 
        gap: 10px; 
    `;

    const Img = styled.img`
        width: 90px; 
        height: 90px; 
    `;

    const NombrePokemon = styled.p` 
        align-self: center; 
        font-weight: 700; 
        font-size: 20px; 
    `;

    return (
        <Contenedor>
            <Img src={imagen} />
            <ContenedorCaracteristicas>
                <NombrePokemon> {`#${id} ${nombre}`} </NombrePokemon>
                <Tipo tipos={tipos}/>
            </ContenedorCaracteristicas>
        </Contenedor>
    ); 
}

export default Card; 