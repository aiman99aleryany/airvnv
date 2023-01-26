import { create } from 'zustand';
import currentUser from './currentUser';

const useCurrentUser = create((set) => ({
    currentUser: currentUser,
    setCurrentUser: () => {},
    clearCurrentUser: () => {},
}));

export default useCurrentUser;
