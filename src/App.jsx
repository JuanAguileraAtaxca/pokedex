import { useState, useEffect } from 'react'; 
import Card from "./components/Card"; 
import styled from "@emotion/styled";

function App() {

  const [pokemones, setPokemones] = useState([]); 
  const [contador, setContador] = useState(1);

  useEffect(() => {
    const peticionAPI = async () => {
      const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/"); 
      const resultado = await respuesta.json(); 
      setPokemones(resultado.results); 
    }

    peticionAPI(); 
  }, []); 

  const previous = () => {
    let i = contador; 
    i = i > 1 ? i -= 1 : i; 
    setContador(i); 
  }

  const next = () => {
    let i = contador; 
    i = i < 10 ? i += 1 : i; 
    setContador(i);
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
      <button disabled={contador == 1 ? true :false} onClick={() => previous()}> {"previous"} </button>
      <button disabled={contador == 10 ? true :false} onClick={() => next()}> {"next"} </button>

    </>
  ); 
}

export default App
