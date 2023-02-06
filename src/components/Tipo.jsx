import {colores} from '../helpers'; 
import styled from "@emotion/styled";

const Tipo = ({tipos, borde}) =>{

    const Contenedor = styled.div`
        display: flex; 
        gap: 10px; 
    `;

    const Texto = styled.p`
        padding: 7px; 
        border-radius: 3px; 
        border: ${borde ? '2px solid white': 'none'};
        text-align: center; 
        font-size: 14px;
        font-weight: 700; 
        color: #FFF; 
    `;

    return (
        <Contenedor>
            {tipos?.map((tipo, index) => (
                <Texto key={index} style={{backgroundColor: colores[tipo]}}> 
                    {tipo} 
                </Texto>
            ))}
        </Contenedor>
    );
}

export default Tipo; 