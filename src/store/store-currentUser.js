import { create } from 'zustand';
import INIT_USER from './initUser';

const useStoreCurrentUser = create((set) => ({
    currentUser: INIT_USER,
    setCurrentUser: (user) => {
        return set((state) => ({
            ...state,
            currentUser: user,
        }));
    },
}));

export default useStoreCurrentUser;
