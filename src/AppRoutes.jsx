import Home from './pages/Home';
import AddProperty from './pages/AddProperty';
import Bookings from './pages/Bookings';
import Signin from './pages/Signin';
import Property from './pages/Property';
import ViewAll from './pages/ViewAll';
import Test from './pages/Test';
const AppRoutes = [
    {
        path: 'test',
        element: <Test />,
    },
    {
        path: '/',
        element: <Home />,
    },
    {
        path: 'signin',
        element: <Signin />,
    },
    {
        path: 'view-all',
        element: <ViewAll />,
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
        path: 'property/:id',
        element: <Property />,
    },
];

export default AppRoutes;
