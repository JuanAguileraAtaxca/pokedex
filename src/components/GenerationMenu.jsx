import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "@emotion/styled";
import "../styles/GenerationMenu.css"; 

const GenerationMenu = () => {

    const [clic, setClic] = useState(false); 

    const Container = styled.div`
        background-color: #4034AA; 
        position: fixed; 
        top: 0; 
        right: 0; 
        left: 0; 
        z-index: 1000; 
    `; 

    const ContainerButton = styled.div`
        padding: 15px 8%; 
    `;

    const ButtonMenu = styled.button`
        font-size: 30px;
        border: none; 
        background-color: transparent; 
        color: white;  
    `; 

    const ContainerOptions = styled.div`
        display: ${clic ? "flex": "none"}; 
        flex-direction: column; 
        justify-content: center; 
        align-items: center; 
        height: 100vh; 
    `; 

    const ButtonOption = styled.div`
        background-color: transparent; 
        color: white; 
        font-weight: 700; 
        padding: 20px 0; 
        text-align: center; 
    `; 

    return (
        <Container>
            <ContainerButton>
                <ButtonMenu onClick={() => setClic(!clic)}>
                    {clic ? <FaTimes/> : <FaBars />}
                </ButtonMenu>
            </ContainerButton>
            <ContainerOptions>
                    <ButtonOption>
                        1° Generación
                    </ButtonOption>
                    <ButtonOption>
                        2° Generación
                    </ButtonOption>
                    <ButtonOption>
                        3° Generación
                    </ButtonOption>
                    <ButtonOption>
                        4° Generación
                    </ButtonOption>
                    <ButtonOption>
                        5° Generación
                    </ButtonOption>
                    <ButtonOption>
                        6° Generación
                    </ButtonOption>
                </ContainerOptions>
        </Container>
    ); 
}

export default GenerationMenu; 