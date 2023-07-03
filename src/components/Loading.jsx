
import styled from "@emotion/styled";


const Loading = ({cargado}) => {
    const Main = styled.div`
        position: fixed; 
        opacity: ${!cargado ? 1:0}; 
        display: grid; 
        place-items: center; 
        background-color: white; 
        z-index: ${!cargado ? 1000:-100}; 
        top: 0; 
        right: 0; 
        left: 0; 
        bottom: 0;  

    `; 

    const Imagen = styled.img`
        width: 140px; 
        object-fit: cover; 

        @media(min-width: 1000px){
            width: 160px;
        }
    `;
    return (
        <Main>
            <Imagen src="/public/run-pikachu.gif"/>
        </Main>
    ); 
}

export default Loading; 