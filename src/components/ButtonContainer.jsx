import styled from '@emotion/styled'; 
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'; 

const ButtonContainer = ({ pagina, setPagina, longitud}) =>{
    const limite = Math.ceil(longitud / 15); 
    const index = () => {
        setPagina(1);
    }
    const lastIndex = () => {
        setPagina(limite); 
    }
    const previous = () =>{
        let n = pagina > 1 ? pagina -1 : 1; 
        setPagina(n); 
    }

    const next = () =>{
        let n = pagina < limite ? pagina + 1: limite; 
        setPagina(n); 
    }

    const ContenedorBotones = styled.div`
        margin-bottom: 20px; 
        display: flex; 
        justify-content: center; 
        gap: 10px; 
    `;

    const Button = styled.button`
        display: flex; 
        justify-content: center; 
        align-items: center; 
        border-radius: 5px; 
        background-color: #4034AA; 
        color: #FFF; 
        border: none; 
        padding: 15px; 
        font-size: 16px; 
        font-weight: 700; 

        &:hover{
            background-color: #342B87; 
        }
    `;

    return (
        <ContenedorBotones>
            <Button onClick={() => index()}> 
                <FaAngleDoubleLeft /> 
            </Button>
            <Button onClick={() => previous()}> 
                <FaChevronLeft /> 
            </Button>
            <Button onClick={() => next()}>
                <FaChevronRight /> 
            </Button>
            <Button onClick={() => lastIndex()}> 
                <FaAngleDoubleRight /> 
            </Button>
        </ContenedorBotones>
    ); 
}

export default ButtonContainer; 