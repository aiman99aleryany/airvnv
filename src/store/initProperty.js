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
        guests: null,
        bedrooms: null,
        beds: null,
        baths: null,
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
    description: '',
};

export default initProperty;
