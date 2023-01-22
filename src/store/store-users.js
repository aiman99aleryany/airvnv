import { create } from 'zustand';
import INIT_USERS from './initUsers';

const useStoreUsers = create((set) => ({
    users: INIT_USERS,
}));

export default useStoreUsers;
