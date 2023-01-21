import { create } from 'zustand';

const useStoreBookings = create((set) => ({
    bookings: [],

    addBooking: (newBooking) => {
        return set((state) => ({
            bookings: [...state.bookings, newBooking],
        }));
    },

    removeBooking: (booking) => {
        return set((state) => ({
            bookings: state.bookings.filter((oldBooking) => {
                return oldBooking.id !== booking.id;
            }),
        }));
    },
}));

export default useStoreBookings;
