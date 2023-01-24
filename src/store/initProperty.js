import { nanoid } from 'nanoid';
import { getLocalStorage } from './localStorage';

const currentUserId = getLocalStorage('currentUserId');
const initProperty = {
    id: nanoid(),
    ownerId: currentUserId,
    title: '',
    type: '',
    price: null,
    location: {
        city: '',
        country: '',
    },
    rating: 0,
    images: {
        first: '',
        second: '',
        third: '',
        forth: '',
        fifth: '',
    },
    createdAt: Date.now(),
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

export default initProperty;
