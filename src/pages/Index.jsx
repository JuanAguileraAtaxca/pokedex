import { useState, useEffect } from 'react'; 
import Card from "../components/Card";
import NavBar from '../components/NavBar';
import ButtonContainer from '../components/ButtonContainer'; 
import {peticionAPI} from '../helpers'; 
import styled from "@emotion/styled";

function Index() {
  const [numero, setNumero] = useState(0);
  const [nombrePokemon, setNombrePokemon] = useState(''); 
  const [pokemones, setPokemones] = useState([]); 

  
  useEffect(() => {
    obtencionDatos(); 
  }, [numero]); 

  const obtencionDatos = async () => {
    const resultado = await peticionAPI(`https://pokeapi.co/api/v2/pokemon/?offset=${numero}&limit=15`); 
    setPokemones(resultado.results); 
  }

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
      <NavBar 
        encabezado="pokedex"
        nombrePokemon={nombrePokemon}
        setNombrePokemon={setNombrePokemon}
      />
      <Contenedor>
        {pokemones?.map((pokemon, index) => (
          <Card key={index} url={pokemon.url}/>
        ))}
      </Contenedor>
      <ButtonContainer numero={numero} setNumero={setNumero} />
    </>
  ); 
}

export default Index; 

