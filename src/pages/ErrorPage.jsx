import { useEffect, useState} from 'react';
import {useRouteError} from 'react-router-dom'; 
import '../styles/ErrorPage.css'; 

const ErrorPage = () => {
    const error = useRouteError(); 
    const [posiciones, setPosiciones] = useState([]);

    useEffect(()=>{
        setPosiciones(llenarPosiciones()); 
    }, []);

    const llenarPosiciones = () => {
        let p = []; 
        for(let i=0; i< 50; i++){
            let x = Math.floor(Math.random()*(95-5)+5); 
            let y = Math.floor(Math.random()*(96-8)+8); 
            let tiempo = Math.random()*(5-1)+1; 
            p = [...p, {x, y, tiempo}]; 
        }
        return p; 
    }

    return (
        <div className='grid grid-place-center text-center gap-20 h-100-vh bg-color-error-page position-relative'>
           
            {posiciones?.map((posicion, index) => (
                <div key={index} className='error-star bg-color-white-40 position-absolute' 
                    style={{top:posicion.x+'%', 
                            left:posicion.y+'%', 
                            animation: 'parpadeo '+posicion.tiempo+'s ease-in-out infinite'}} ></div>
            ))}

            <img className='img-error position-absolute' src='https://www.pngplay.com/wp-content/uploads/11/Mew-Pokemon-Background-PNG.png' alt='mew'/>
            
            <div className='error-message'>
                <div>
                    <h1> Oops! </h1>
                    <p> No se ha encontrado la página solicitada </p>
                    <p>
                        <i>{error.statusText||error.messages}</i>
                    </p>
                </div>
            </div>
            
        </div>
    ); 
}

export default ErrorPage; 