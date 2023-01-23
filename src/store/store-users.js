import { create } from 'zustand';
import INIT_USERS from './initUsers';

const useStoreUsers = create((set) => ({
    users: INIT_USERS,

    addNewUser: (newUser) => {
        return set((state) => ({
            users: [...state.users, newUser],
        }));
    },

    addNewUsers: (newUsers) => {
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

export default useStoreUsers;
