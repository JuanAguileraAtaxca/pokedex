import { useState } from 'react';
import '../styles/NavBar.css';
import {FaSearch} from 'react-icons/fa'; 

const NavBar = ({encabezado, busqueda, setBusqueda}) =>{

    const hadleSubmit = (e) =>{
        e.preventDefault(); 
    }

    const hadleChange = (e) => {
        setBusqueda(e.target.value); 
    }

    return (
        <nav className='navbar mb-30 mt-40 '>
            <h1 className='navbar__h1'>{encabezado}</h1>
            <form onSubmit={hadleSubmit} className='navbar__form mt-20 mlr-auto flex'>
                <input 
                    type='search' 
                    placeholder='Busquedo por nombre o id'
                    value={busqueda}
                    onChange={(e) => hadleChange(e)}
                    className='navbar__form-input p-15'
                />
                <button className='navbar__form-button p-15'><FaSearch /></button>
            </form>
        </nav>
    );
}

export default NavBar; 