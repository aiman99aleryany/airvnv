import { nanoid } from 'nanoid';

const INIT_BOOKING = {
    id: nanoid(),
    propertyId: '',
    ownerId: '',
    bookerId: '',
    checkIn: '',
    checkOut: '',
};

export default INIT_BOOKING;
