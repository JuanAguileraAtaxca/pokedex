import { useState, useEffect } from 'react'; 
import SearchBar from './components/SearchBar'; 
import Card from "./components/Card";
import ButtonContainer from './components/ButtonContainer'; 
import { peticionAPI } from './helpers'; 
import styled from "@emotion/styled";

function App() {

  const [pokemones, setPokemones] = useState([]); 
  const [contador, setContador] = useState(1);
  const [numero, setNumero] = useState(0);

  useEffect(() => {
    obtencionDatos(); 
  }, [contador]); 

  const obtencionDatos = async () => {
    const resultado =await peticionAPI(`https://pokeapi.co/api/v2/pokemon/?offset=${numero}&limit=15`); 
    setPokemones(resultado.results); 
  }

  const Nav = styled.nav`
    display: flex; 
    flex-direction: column; 
    padding: 0 5%; 
    margin-bottom: 30px; 
    gap: 20px;  
  `;

  const H1 = styled.h1`
    font-size: 30px; 
    margin: 15px 0; 
  `;

  const Contenedor = styled.div` 
    max-width: 1000px; 
    width: 80%; 
    margin: 0 auto 40px; 
    display: grid; 
    gap: 20px; 

    @media(min-width: 380px){
      grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));

    }
  `;

  return (
    <>
      <Nav>
        <H1> Pokedex </H1>
        <SearchBar />
      </Nav>
      <Contenedor>
        {pokemones.map((pokemon, index) => (
          <Card key={index} url={pokemon.url}/>
        ))}
      </Contenedor>
      <ButtonContainer 
          contador={contador} 
          setContador={setContador} 
          numero={numero} 
          setNumero={setNumero}
      />
    </>
  ); 
}

export default App
