import { useState } from 'react';
import '../styles/NavBar.css';
import {FaSearch} from 'react-icons/fa'; 

const NavBar = ({encabezado, nombrePokemon, setNombrePokemon}) =>{
    const [nombre, setNombre] = useState('');
    const hadleSubmit = (e) =>{
        e.preventDefault(); 
    }

    const hadleChange = (e) => {
        setNombre(e.target.value); 
    }

    return (
        <nav className='navbar mb-30 mt-20 '>
            <h1 className='navbar__h1'>{encabezado}</h1>
            <form onSubmit={hadleSubmit} className='navbar__form mt-20 mlr-auto flex'>
                <input 
                    type='search' 
                    placeholder='Busquedo por nombre o id'
                    value={nombre}
                    onChange={(e) => hadleChange(e)}
                    className='navbar__form-input p-15'
                />
                <button className='navbar__form-button p-15'><FaSearch /></button>
            </form>
        </nav>
    );
}

export default NavBar; 