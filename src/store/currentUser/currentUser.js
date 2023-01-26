import { getLocalStorage } from '../localStorage/localStorage';
import INIT_USERS from '../users/INIT_USERS';
import { pipe } from '../../functions/pipe';

// here we are using local storage as a simulation for the backend.
// 1- We check if the user is signed in or not.
// 2- after that we filter through the users we have and send back the date of the current user to
//    the front-end (zustand)

const checkIfSignedIn = () => getLocalStorage('isUserSignedIn') && true;

const getCurrentUserId = (isSignedIn) =>
    isSignedIn ? getLocalStorage('currentUserId') : null;

const searchCurrentUser = (id) =>
    id ? INIT_USERS.filter((user) => user.id === id)[0] : null;

const getCurrentUser = (user) => (user ? user : null);

const initiateSignInVerification = pipe(
    checkIfSignedIn,
    getCurrentUserId,
    searchCurrentUser,
    getCurrentUser
);

const currentUser = initiateSignInVerification();

export default currentUser;
