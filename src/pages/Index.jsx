import { useState, useEffect } from 'react';
import Loading from "../components/Loading";  
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
  const [cargado, setCargado] = useState(localStorage.getItem("cargado") ?? false); 
  const [longitud, setLongitud] = useState(0); 

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
    // se guardan la pagina actual en el 
    // localStorage
    localStorage.setItem("pagina", pagina); 
  }, [pagina]);

  useEffect(() => {
    localStorage.setItem("longitud", longitud); 
  }, [longitud]);

  useEffect(() => {
    localStorage.setItem("busqueda", busqueda); 
    setPagina(1); 
    let maximo = pokemones.filter(p => p.name.startsWith(busqueda) || p.id.toString().startsWith(busqueda)).map(x => x).length; 
    setLongitud(maximo); 
  }, [busqueda]);

  
  useEffect(() => {
    // se guardan los datos de los pokemones 
    // en el localStorage
    localStorage.setItem("pokemones", JSON.stringify(pokemones)); 
    localStorage.setItem("cargado", cargado); 
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
    setLongitud(pokemonesPeticion.length);
    setCargado(true); 
  }

  /**
   * Styled components
   */

  const Main = styled.div` 
    max-width: 1000px; 
    width: 80%; 
    margin: 50px auto 40px;

  `;

  const MainPokemon = styled.div`
    width: 100%; 
    display: grid; 
    gap: 18px; 

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
      <Loading cargado={cargado}/>
      <NavBar encabezado="pokedex" busqueda={busqueda} setBusqueda={setBusqueda}/>
      
      <Main>
        {longitud > 0 ? (
          <MainPokemon>
            {pokemones?.filter(p => p.name.startsWith(busqueda) || p.id.toString().startsWith(busqueda)).map((p, index) => (
              <Card key={index} pokemon={p}/>
            )).slice(inicio, final)}
          </MainPokemon>
        ):(
          <p style={
            {
              textAlign: "center", 
              fontSize: "20px", 
              fontWeight: 700, 
              marginTop: "80px",
              marginBottom: "80px"
            }
          }> No se encontró ningún pokemon</p>
        )}
      </Main>
       
      <ButtonContainer pagina={pagina} setPagina={setPagina} longitud={longitud}/>
    </>
  ); 
}

export default Index; 

