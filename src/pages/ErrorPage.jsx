import { useEffect, useState} from 'react';
import {useRouteError} from 'react-router-dom'; 
import '../styles/ErrorPage.css'; 

const ErrorPage = () => {
    const error = useRouteError(); 
    const [posiciones, setPosiciones] = useState([]);

    useEffect(()=>{
        setPosiciones(llenarPosiciones()); 
        posiciones?.map((posicion) => {
            console.log(posicion); 
        });
        console.log(posiciones); 
    }, []);

    const llenarPosiciones = () => {
        let p = []; 
        for(let i=0; i< 50; i++){
            let x = Math.floor(Math.random()*(95-5)+5); 
            let y = Math.floor(Math.random()*(96-8)+8); 
            p = [...p, {x, y}]; 
        }
        return p; 
    }

    return (
        <div className='grid grid-place-center text-center gap-20 h-100-vh bg-color-error-page position-relative'>
           
            {posiciones?.map((posicion, index) => (
                <div key={index} className='error-star bg-color-white position-absolute' style={{top:posicion.x+'%', left:posicion.y+'%'}} ></div>
            ))}
            <div>
                <div>
                    <h1> Oops! </h1>
                    <p> No se ha encontrado la página solicitada </p>
                    <p>
                        <i>{error.statusText||error.messages}</i>
                    </p>
                </div>
                <div>

                </div>
            </div>
            
        </div>
    ); 
}

export default ErrorPage; 