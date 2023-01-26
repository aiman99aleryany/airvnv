import { create } from 'zustand';
import INIT_USERS from './INIT_USERS';

const useUsers = create((set) => ({
    users: INIT_USERS,

    addUser: (newUser) => {
        return set((state) => ({
            users: [...state.users, newUser],
        }));
    },

    addUsers: (newUsers) => {
        return set((state) => ({
            users: [...state.users, ...newUsers],
        }));
    },

    editUser: (userId, editedUser) => {
        return set((state) => ({
            users: state.users.map((user) =>
                user.id === userId ? { ...user, ...editedUser } : user
            ),
        }));
    },
}));

export default useUsers;
