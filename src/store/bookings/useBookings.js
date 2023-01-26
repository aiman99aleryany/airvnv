import { create } from 'zustand';

const useBookings = create((set) => ({
    bookings: [],

    addBooking: (newBooking) => {
        return set((state) => ({
            bookings: [...state.bookings, newBooking],
        }));
    },

    addBookings: (newBookings) => {
        return set((state) => ({
            bookings: [...state.bookings, ...newBookings],
        }));
    },

    editBooking: (editedBooking) => {
        return set((state) => ({
            bookings: state.bookings.map((booking) => {
                return booking.id === editedBooking.id
                    ? { ...booking, ...editedBooking }
                    : booking;
            }),
        }));
    },

    deleteBooking: (bookingToDelete) => {
        return set((state) => ({
            bookings: state.bookings.filter((booking) => {
                return booking.id !== bookingToDelete.id;
            }),
        }));
    },
}));

export default useBookings;
