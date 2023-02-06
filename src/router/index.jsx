import {createBrowserRouter, createHashRouter} from 'react-router-dom';
import Public from '../pages/Public';
import Index from '../pages/Index'; 
import Pokemon, {loaderPokemon} from '../pages/Pokemon'; 
import ErrorPage from '../pages/ErrorPage';

export const router = createHashRouter([
    {
        path: '/', 
        element: <Public/>,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true, 
                element: <Index />,
            },
            {
                path: '/pokemon/:id',
                element: <Pokemon />,
                loader: loaderPokemon,
            }
        ]
    }
]);