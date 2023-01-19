import {createBrowserRouter} from 'react-router-dom';
import Public from '../pages/Public';
import App from '../App';  
import Pokemon from '../pages/Pokemon'; 
import ErrorPage from '../pages/ErrorPage';

export const router = createBrowserRouter([
    {
        path: '/', 
        element: <Public/>,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true, 
                element: <App />
            },
            {
                path: '/pokemon',
                element: <Pokemon />
            }
        ]
    }
]);