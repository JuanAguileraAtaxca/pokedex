import styled from '@emotion/styled'; 
import { FaChevronLeft, FaChevronRight, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'; 

const ButtonContainer = ({numero, setNumero}) =>{

    const establecer = (a) => setNumero(a);

    const next = () => setNumero(numero < 135 ? numero += 15 : numero); 

    const previous = () => setNumero(numero > 0 ? numero -= 15 : numero);

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
            <Button disabled={numero == 0 ? true :false} onClick={() => establecer(0)} > 
                <FaAngleDoubleLeft /> 
            </Button>
            <Button disabled={numero == 0 ? true :false} onClick={() => previous()}> 
                <FaChevronLeft /> 
            </Button>
            <Button disabled={numero == 135 ? true :false} onClick={() => next()}>
                <FaChevronRight /> 
            </Button>
            <Button disabled={numero == 135 ? true :false} onClick={() => establecer(135)}> 
                <FaAngleDoubleRight /> 
            </Button>
        </ContenedorBotones>
    ); 
}

export default ButtonContainer; 