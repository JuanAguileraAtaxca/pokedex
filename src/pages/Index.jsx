import { useState, useEffect } from 'react'; 
import Card from "../components/Card";
import NavBar from '../components/NavBar';
import ButtonContainer from '../components/ButtonContainer'; 
import {peticionAPI} from '../helpers'; 
import styled from "@emotion/styled";

function Index() {
  // Declaración de estados
  //const [numero, setNumero] = useState(localStorage.getItem("numero") ?? 0);
  const [pokemones, setPokemones] = useState(JSON.parse(localStorage.getItem("pokemones")) ?? []); 
  const [pagina, setPagina] = useState(parseInt(localStorage.getItem("pagina")) ?? 1);
  const [elementos, setElementos] = useState(15);  

  const final = elementos * pagina;
  const inicio= final - elementos;  

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
    // localStorage.setItem("numero", numero);  
  }, []); 

  useEffect(() => {
    localStorage.setItem("pagina", pagina); 
  }, [pagina]);
  
  useEffect(() => {
    localStorage.setItem("pokemones", JSON.stringify(pokemones)); 
  }, [pokemones]); 

  const obtencionDatos = async () => {

    let pokemonesPeticion = []; 
    for(let i=1; i <= 151; i++){
      const json = await peticionAPI(`https://pokeapi.co/api/v2/pokemon/${i}`); 
      //console.log(json); 
      const p = {
        id: json.id,
        name: json.name,
        base_experience: json.base_experience,
        height: json.height,
        weight: json.weight,
        types: json.types.map(type => type.type["name"]),
        sprite: json.sprites["front_default"],
        sprite_animated: json.sprites["versions"]["generation-v"]["black-white"]["animated"]["front_default"],
      }

      pokemonesPeticion = [...pokemonesPeticion, p];
    }
    
    setPokemones(pokemonesPeticion); 

  }

  /**
   * Styled components
   */

  const Contenedor = styled.div` 
    max-width: 1000px; 
    width: 80%; 
    margin: 50px auto 40px; 
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
      
      <NavBar encabezado="pokedex"/>
      
      <Contenedor>
        {pokemones?.slice(inicio, final).map((p, index) => (
          <Card key={index} pokemon={p}/>
        ))}
      </Contenedor> 
      <ButtonContainer pagina={pagina} setPagina={setPagina} />
    </>
  ); 
}

export default Index; 

