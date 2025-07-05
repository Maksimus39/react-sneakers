import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import 'macro-css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import {FavoriteIcon} from "./components/header/FavoriteIcon";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/favorite",
        element: <FavoriteIcon/>,
    },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <App/>
        </RouterProvider>
    </React.StrictMode>
);
