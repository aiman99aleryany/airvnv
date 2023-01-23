import { create } from 'zustand';
import INIT_USERS from './initUsers';

const useStoreUsers = create((set) => ({
    users: INIT_USERS,
    editUsers: (userId, editedUser) => {
        console.log(userId, editedUser);
        return set((state) => ({
            users: state.users.map((user) =>
                user.id === userId ? { ...user, ...editedUser } : user
            ),
        }));
    },
}));

export default useStoreUsers;
