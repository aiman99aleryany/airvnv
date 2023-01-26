import { nanoid } from 'nanoid';



// This object will be in sign up page, this object will be sent to the server after the validation
// also this object will be fetched from the server when you log in.
const INIT_USER = { 
    id: nanoid(),       // generated id for the user
    username: '',       // string
    email: '',          // string
    password: '',       // string
    firstName: '',      // string
    lastName: '',       // string
    birthDate: '',      // string
    properties: [],     // array of objects
    bookings: [],       // array of objects
    profileImage: '',   // string link fetched from the server
    lastLogIn: '',      // string date and time
    isSignedIn: false,  // boolean 
    isEdited: false,    // if the user wants to edit his profile.
    notifications: [],  // if someone booked your property or messaged you after the booking.
};

export default INIT_USER;
