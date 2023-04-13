import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "@emotion/styled";
import { css, keyframes } from '@emotion/react'; 
import "../styles/GenerationMenu.css"; 

const GenerationMenu = () => {

    const [clic, setClic] = useState(false); 

    const animation = keyframes`
        from{
            left: -100%; 
        }
        to{
            left: 0%; 
        }
    `; 

    const animationClose = keyframes`
        from{
            left: 0%; 
        }
        to{
            left: -100%; 
        }
    `; 

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
        position: fixed;
        width: 100%;  
        height: 100vh; 
        background-color: #4034AA; 
        z-index: 1000; 
        left: ${ clic ? "0%":"-100%"};
        animation: ${clic && animation} 1s;
        display: flex; 
        flex-direction: column; 
        justify-content: center; 
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