import Home from './pages/Home';
import AddProperty from './pages/AddProperty';
import Bookings from './pages/Bookings';
import Signin from './pages/Signin';
import Property from './pages/Property';
import ViewAll from './pages/ViewAll';
import Test from './pages/Test';
import MyProperties from './pages/MyProperties';
import CheckBooking from './pages/CheckBooking';

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
        path: 'my-properties',
        element: <MyProperties />,
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
        path: 'check-booking/:id',
        element: <CheckBooking />
    },
    {
        path: 'property/:id',
        element: <Property />,
    },
];

export default AppRoutes;
