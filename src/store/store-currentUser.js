import { create } from 'zustand';

const useStoreCurrentUser = create((set) => ({
    currentUser: null,

    setCurrentUser: (user) => {
        return set((state) => ({
            ...state,
            currentUser: user,
        }));
    },
}));

export default useStoreCurrentUser;
