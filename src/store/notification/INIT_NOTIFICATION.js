import { nanoid } from 'nanoid';

const INIT_NOTIFICATION = {
    id: nanoid(),
    from: '', // from user 1
    to: '', // to user 2
    cause: '', // booking or chat?
};

export default INIT_NOTIFICATION;
