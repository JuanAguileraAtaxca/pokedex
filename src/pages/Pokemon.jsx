import {colores} from '../helpers'; 
import '../styles/Pokemon.css'; 
import {FaAngleLeft} from 'react-icons/fa'; 

const Pokemon = () => {
    return (
        <div className='h-100-vh'>
            <a href='#' className='back-pokedex inline-block mt-20'>
                <FaAngleLeft />
            </a>
            <div className='pokemon-decoration'></div>
            <div className='pokemon m-c'>
                <div className='flex flex-align-center flex-justify-between'>
                    <h1 className=''> Pikachu </h1>
                    <p className='font-weight-700 pokemon-name'> # 025 </p>
                </div>
                <div className='mt-20'>
                    <p className='pokemon-type font-weight-700'> Electric </p>
                </div>
                <div className='flex flex-justify-center mt-10'>
                    <img className='pokemon__img' src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"/>
                </div>
                <div className='mt-20'>
                    <p className='text-center p-15 border-b-1-white font-weight-700 flex flex-justify-between'> Experience: <span>200</span></p>
                    <p className='text-center p-15 border-b-1-white font-weight-700 flex flex-justify-between'> Height: <span>4</span> </p>
                    <p className='text-center p-15 font-weight-700 flex flex-justify-between'> Weight: <span> 900 </span></p>
                </div>
            </div>
        </div>
        
        
    );
}

export default Pokemon; 