import styled from "@emotion/styled";

const Tipo = ({tipos}) =>{

    const colores = {
        fire: "#FF7F00",
        water: "#B0E2FF",
        electric: "#FFD700",
        poison: "#CC88BB",
        grass: "#99FF66",
        bug: "#99CC33", 
        normal: "#DDCCAA",
        flying: "#BAAAFF",
        ground: "#DEB887",
        fairy: "#FFB0FF",
        fighting: "#FF6A6A",
        psychic: "#FFB5C5",
        rock: "#CD853F",
        steel: "#CCCCCC",
        ice: "#ADD8E6",
        ghost: "#778899",
        dragon: "#AB82FF"
    }

    const Contenedor = styled.div`
        display: flex; 
        gap: 10px; 
    `;

    const Texto = styled.p`
        padding: 5px; 
        text-align: center; 
        font-size: 14px;
        font-weight: 700; 
        color: #FFF; 
    `;

    return (
        <Contenedor>
            {tipos?.map((tipo, index) => (
                <Texto key={index} style={{backgroundColor: colores[tipo]}}> {tipo} </Texto>
            ))}
        </Contenedor>
    );
}

export default Tipo; 