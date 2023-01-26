import { nanoid } from 'nanoid';
import { getLocalStorage } from '../localStorage';

// for now the current user will be fitched from the localStorage
// later the current user will be fitched from the server.
const currentUserId = getLocalStorage('currentUserId');

const INIT_PROPERTY = {
    id: nanoid(),
    ownerId: currentUserId,
    title: '',
    type: '',
    price: 0,
    location: {
        city: '',
        country: '',
    },
    rating: 0,
    images: {
        img1: '',
        img2: '',
        img3: '',
        img4: '',
        img5: '',
    },
    createdAt: Date.now(),
    updatedAt: Date.now(),
    startDate: '',
    endDate: '',
    details: {
        guests: 0,
        bedrooms: 0,
        beds: 0,
        baths: 0,
    },
    offers: {
        wifi: false,
        kitchen: false,
        parking: false,
        pets: false,
        tv: false,
        pool: false,
        smoke: false,
    },
    bookings: [],
    description: '',
};

export default INIT_PROPERTY;
