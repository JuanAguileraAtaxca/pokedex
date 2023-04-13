import { useState, useEffect } from 'react'; 
import Card from "../components/Card";
import NavBar from '../components/NavBar';
import GenerationMenu from '../components/GenerationMenu'; 
import ButtonContainer from '../components/ButtonContainer'; 
import {peticionAPI} from '../helpers'; 
import styled from "@emotion/styled";

function Index() {
  // Declaración de estados
  const [numero, setNumero] = useState(localStorage.getItem("numero") ?? 0);
  // const [nombrePokemon, setNombrePokemon] = useState(''); 
  const [pokemones, setPokemones] = useState([]); 

  
  /** 
   * Creación del localStorage
  */
  /**
   * UseEffect escuchando los cambios
   * de "numero"
   * 
   * Operaciones: 
   *  - Solicitud de datos
   *  - localStorage -> guardar el número de página. 
   */
  useEffect(() => {
    // Petición a la API 
    obtencionDatos(); 

    // Guardando datos en el localStorage
    localStorage.setItem("numero", numero);  
  }, [numero]); 

  const obtencionDatos = async () => {
    const resultado = await peticionAPI(`https://pokeapi.co/api/v2/pokemon/?offset=${numero}&limit=15`); 
    setPokemones(resultado.results); 
  }

  /**
   * Styled components
   */

  const Contenedor = styled.div` 
    max-width: 1000px; 
    width: 80%; 
    margin: 100px auto 40px; 
    display: grid; 
    gap: 20px; 


    @media(min-width: 380px){
      grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    }
  `;

  /**
   * Creación del componente:
   *    - NavBar: Creación de una barra de busqueda.
   *    - Contenedor: Muestra los pokemones.
   *    - ButtonContainer: Se encuentran los botones de paginación. 
   */
  return (
    <>
      {/** 
      <NavBar 
        encabezado="pokedex"
        nombrePokemon={nombrePokemon}
        setNombrePokemon={setNombrePokemon}
      />*/}
      <GenerationMenu />
      
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

