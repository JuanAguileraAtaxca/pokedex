import styled from '@emotion/styled'; 
import { FaChevronLeft, FaChevronRight, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'; 

const ButtonContainer = ({contador, setContador, numero, setNumero}) =>{

    const establecer = (a, b) => {
        setNumero(a);
        setContador(b);  
    }

    const next = () =>{
        let i = contador; 
        i = i < 10 ? i += 1 : i; 
        setContador(i);
        setNumero(numero + 15);  
    }

    const previous = () =>{
        let i = contador; 
        i = i > 1 ? i -= 1 : i; 
        setContador(i); 
        setNumero(numero - 15);
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
            <Button disabled={contador == 1 ? true :false} onClick={() => establecer(0,1)} > <FaAngleDoubleLeft /> </Button>
            <Button disabled={contador == 1 ? true :false} onClick={() => previous()}> <FaChevronLeft /> </Button>
            <Button disabled={contador == 10 ? true :false} onClick={() => next()}> <FaChevronRight /> </Button>
            <Button disabled={contador == 10 ? true :false} onClick={() => establecer(135, 10)}> <FaAngleDoubleRight /> </Button>
        </ContenedorBotones>
    ); 
}

export default ButtonContainer; 