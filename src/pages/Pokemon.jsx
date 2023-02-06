import {useEffect} from 'react'
import {useLoaderData, Link} from 'react-router-dom'; 
import Tipo from '../components/Tipo';
import {colores} from '../helpers'; 
import '../styles/Pokemon.css'; 
import {FaAngleLeft} from 'react-icons/fa'; 

const Pokemon = () => {
    const {json} = useLoaderData(); 

    return (
        <div className='h-100-vh'>
            <Link to='/' className='back-pokedex inline-block mt-20'>
                <FaAngleLeft />
            </Link>
            <div 
                className='pokemon-decoration'
                style={
                    {
                        background: `linear-gradient(to top,#fff 55%,${colores[json.types[0].type.name]} 55%)`
                    }
                }
            ></div>
            <div className='pokemon m-c mt-30'>
                <div className='flex flex-align-center flex-justify-between'>
                    <h1 className=''> {json.name} </h1>
                    <p className='font-weight-700 pokemon-name'> #{`${json.id.toString().padStart(3,0)}`} </p>
                </div>
                <div className='mt-20'>
                    <Tipo tipos={json.types.map(type => type.type.name)} borde={true}/>
                </div>
                <div className='flex flex-justify-center'>
                    <img className='pokemon__img' 
                    src={`${json.sprites.versions['generation-v']['black-white'].animated.front_default}`}/>
                </div>
                <div className='text-colot-black mt-30'>
                    <p className='text-center p-15 border-b-2-white font-weight-700 flex flex-justify-between'> 
                        Experience: <span>{json.base_experience}</span>
                    </p>
                    <p className='text-center p-15 border-b-2-white font-weight-700 flex flex-justify-between'> 
                        Height: <span>{`${json.height/10} m`}</span> 
                    </p>
                    <p className='text-center p-15 font-weight-700 flex flex-justify-between'> 
                        Weight: <span>{`${json.weight/10} kg`}</span>
                    </p>
                </div>
            </div>
        </div>
        
        
    );
}
export default Pokemon; 

export const loaderPokemon = async ({params}) => {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`); 
    const json = await respuesta.json(); 

    return {json};
}