import { useState, useEffect } from 'react'; 
import Card from "../components/Card";
import NavBar from '../components/NavBar';
import ButtonContainer from '../components/ButtonContainer'; 
import {peticionAPI} from '../helpers'; 
import styled from "@emotion/styled";

function Index() {
  // Declaración de estados y constantes  
  const [pokemones, setPokemones] = useState(JSON.parse(localStorage.getItem("pokemones")) ?? []); 
  const [busqueda, setBusqueda] = useState(localStorage.getItem("busqueda") ?? ""); 
  const [pagina, setPagina] = useState(localStorage.getItem("pagina") ?? 1);
  const [elementos, setElementos] = useState(15);  

  const final = elementos * pagina;
  const inicio= final - elementos;  

  /** 
   * Creación del localStorage
  */
  /**
   * UseEffect escuchando los cambios
   * de "pagina" y "pokemones"
   * 
   * Operaciones: 
   *  - Solicitud de datos
   *  - localStorage -> guardar el número de página. 
   */
  useEffect(() => {
    // Petición a la API 
    obtencionDatos(); 
  }, []); 

  useEffect(() => {
    localStorage.setItem("busqueda", busqueda); 
    setPagina(1); 
  }, [busqueda]);

  useEffect(() => {
    // se guardan la pagina actual en el 
    // localStorage
    localStorage.setItem("pagina", pagina); 
  }, [pagina]);
  
  useEffect(() => {
    // se guardan los datos de los pokemones 
    // en el localStorage
    localStorage.setItem("pokemones", JSON.stringify(pokemones)); 
  }, [pokemones]); 

  const obtencionDatos = async () => {

    let pokemonesPeticion = []; 
    // se solicitan los datos de los pokemones de la 
    // primera generación
    for(let i=1; i <= 151; i++){
      const p = await peticionAPI(`https://pokeapi.co/api/v2/pokemon/${i}`); 
      // se agrega el objeto al arreglo
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
      
      <NavBar encabezado="pokedex" busqueda={busqueda} setBusqueda={setBusqueda}/>
      
      <Contenedor>
        {pokemones?.filter(p => p.name.startsWith(busqueda)).map((p, index) => (
          <Card key={index} pokemon={p}/>
        )).slice(inicio, final)}
      </Contenedor> 
      <ButtonContainer pagina={pagina} setPagina={setPagina} />
    </>
  ); 
}

export default Index; 

