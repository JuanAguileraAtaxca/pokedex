import {useRouteError} from 'react-router-dom'; 
import '../styles/ErrorPage.css'; 

const ErrorPage = () => {
    const error = useRouteError(); 
    console.error(error); 

    return (
        <div className='grid grid-place-center text-center gap-20 h-100-vh'>
            <h1> Oops! </h1>
            <p> Sorry, an unexpected error has ocurred. </p>
            <p>
                <i>{error.statusText||error.messages}</i>
            </p>
        </div>
    ); 
}

export default ErrorPage; 