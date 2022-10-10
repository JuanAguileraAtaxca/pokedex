import { useState, useEffect } from 'react'; 
import Card from "./components/Card"; 
import styled from "@emotion/styled";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 

function App() {

  const [pokemones, setPokemones] = useState([]); 
  const [contador, setContador] = useState(1);
  const [numero, setNumero] = useState(0);

  useEffect(() => {
    peticionAPI(`https://pokeapi.co/api/v2/pokemon/?offset=${numero}&limit=15`); 
  }, [contador]); 

  const peticionAPI = async (url) => {
    const respuesta = await fetch(url); 
    const resultado = await respuesta.json(); 
    setPokemones(resultado.results); 
  }

  const previous = () => {
    let i = contador; 
    i = i > 1 ? i -= 1 : i; 
    setContador(i); 
    setNumero(numero - 15);
  }

  const next = () => {
    let i = contador; 
    i = i < 10 ? i += 1 : i; 
    setContador(i);
    setNumero(numero + 15);
  }

  const Nav = styled.nav`
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    padding: 0 5%; 
    margin-bottom: 30px;  
  `;

  const H1 = styled.h1`
    font-size: 30px; 
    margin: 10px 0; 
  `;

  const Contenedor = styled.div`
    max-width: 1000px; 
    width: 80%; 
    margin: 0 auto 40px; 
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    gap: 20px; 
  `;

  const ContenedorBotones = styled.div`
    margin-bottom: 20px; 
    display: flex; 
    justify-content: center; 
    gap: 20px; 
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
  `;

  return (
    <>
      <Nav>
        <H1> Pokedex </H1>
      </Nav>
      <Contenedor>
        {pokemones.map((pokemon, index) => (
          <Card key={index} url={pokemon.url} />
        ))}
      </Contenedor>
      <ContenedorBotones>
        <Button disabled={contador == 1 ? true :false} onClick={() => previous()}> <FaChevronLeft /> </Button>
        <Button disabled={contador == 10 ? true :false} onClick={() => next()}> <FaChevronRight /> </Button>
      </ContenedorBotones>
    </>
  ); 
}

export default App
