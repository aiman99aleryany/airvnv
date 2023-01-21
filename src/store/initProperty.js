import { nanoid } from 'nanoid';

const initProperty = {
    id: nanoid(),
    title: '',
    type: '',
    price: 0,
    location: {
        address: '',
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
    updatedAt: Date.now(),
    startDate: '',
    endDate: '',
    details: {
        guests: 0,
        bedrooms: 0,
        beds: 0,
        baths: 0,
    },
    offers: {},
    description: '',
};

export default initProperty;
