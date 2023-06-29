import {Link} from 'react-router-dom';
import Tipo from "./Tipo";
import styled from "@emotion/styled";


const Card = ({pokemon}) => {
    const {id, name, sprite, types} = pokemon;  

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
        box-shadow: 1px 1px 9px rgb(0,0,0,0.5); 

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
        <Link to={`/pokemon/${id}`}>
            <Contenedor>
                {sprite ? (<Img lazy="loading" src={sprite} />):( <ImgCarga></ImgCarga>)}
                <ContenedorCaracteristicas>
                    {id && name ? (
                        <NombrePokemon> {`#${id.toString().padStart(3, 0)} ${name}`} </NombrePokemon>
                    ):(
                        <>
                            <NombreCarga></NombreCarga>
                            <NombreCarga></NombreCarga>
                        </>
                    )}
                    <Tipo tipos={types} borde={false} />
                </ContenedorCaracteristicas>
            </Contenedor>
        </Link>
        
    ); 
}

export default Card; 
