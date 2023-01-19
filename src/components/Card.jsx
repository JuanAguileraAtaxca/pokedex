import {useState, useEffect} from "react"; 
import {peticionAPI} from "../helpers/index";
import Tipo from "./Tipo";
import styled from "@emotion/styled";


const Card = ({url}) => {
    const [pokemon, setPokemon] = useState({});
    const {id, nombre, imagen, tipos} = pokemon; 

    useEffect(() => {
        const obtencionDatos = async () => {
            const resultado = await peticionAPI(url); 
            
            setPokemon(
                {
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
            ); 
        }

        obtencionDatos(); 
    }, []); 

    const Contenedor = styled.div`
        position: relative; 
        background-color: #F9F9F9; 
        width: 100%; 
        border-radius: 10px; 
        display: flex; 
        flex-direction: row-reverse; 
        justify-content: space-between; 
        padding: 20px;
        transition: background-color 0.5s ease-in; 

        &:hover{
            background-color: #F1F3F3; 
        }
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
        border: none; 
    `;

    const NombrePokemon = styled.p` 
        text-align: center; 
        font-weight: 700; 
        font-size: 20px; 

        @media(max-width: 320px){
            font-size: 14px; 
        }
    `;

    const ImgCarga = styled.div`
        width: 90px; 
        height: 90px; 
        border: none;
        background-color: #D6DBDF;  
    `;

    const NombreCarga = styled.div`
        width: 110px; 
        background-color: #D0D3D4; 
        height: 15px; 
        margin-bottom: 15px; 

    `;

    return (
        <Contenedor>
            {imagen ? (<Img lazy="loading" src={imagen} />):( <ImgCarga></ImgCarga>)}
            <ContenedorCaracteristicas>
                {id && nombre ? (
                    <NombrePokemon> {`# ${id} ${nombre}`} </NombrePokemon>
                ) : (
                    <>
                        <NombreCarga></NombreCarga>
                        <NombreCarga></NombreCarga>
                    </>
                )}
                <Tipo tipos={tipos}/>
            </ContenedorCaracteristicas>
        </Contenedor>
    ); 
}

export default Card; 