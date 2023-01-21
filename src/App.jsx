import React from 'react';
import './styles/Index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function App() {
    const routes = createBrowserRouter(AppRoutes);

    return (
        <React.StrictMode>
            <RouterProvider router={routes}></RouterProvider>
        </React.StrictMode>
    );
}

export default App;
