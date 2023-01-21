import Home from './pages/Home';
import AddProperty from './pages/AddProperty';
import Bookings from './pages/Bookings';
import Signin from './pages/Signin';
import PropertyDetails from './pages/PropertyDetails';

const AppRoutes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: 'signin',
        element: <Signin />,
    },
    {
        path: 'add-property',
        element: <AddProperty />,
    },
    {
        path: 'bookings',
        element: <Bookings />,
    },
    {
        path: 'property-details/:id',
        element: <PropertyDetails />,
    },
];

export default AppRoutes;
