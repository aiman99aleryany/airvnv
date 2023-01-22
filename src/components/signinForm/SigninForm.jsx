import React, { useState } from 'react';
import useStoreUsers from '../../store/store-users';
import useStoreCurrentUser from '../../store/store-currentUser';
import './SigninForm.scss';
import { setLocalStorage } from '../../store/localStorage';

function SigninForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const users = useStoreUsers((state) => state.users);
    const setCurrentUser = useStoreCurrentUser((state) => state.setCurrentUser);

    const currentUser = useStoreCurrentUser((state) => state.currentUser);

    const usernameChangeHandler = (e) => {
        setUsername(e.target.value);
    };
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const submitUser = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const isUsernameExist = username ? true : false;
        const isPasswordExist = password ? true : false;
        const isFieldsExist = isUsernameExist && isPasswordExist ? true : false;

        if (isFieldsExist) {
            const thisUser = users.filter((user) => {
                return user.username === username && user.password === password;
            });

            if (thisUser.length === 1) {
                setCurrentUser(thisUser[0]);
                setLocalStorage('currentUser', thisUser[0].id);
                setLocalStorage('isUserSignedIn', true);
                window.location.href = '/';
            } else {
                setError(true);
            }
        }

        return;
    };

    console.log(currentUser);

    return (
        <div className="form-wrapper">
            <form>
                <label htmlFor="username">
                    Username{' '}
                    <input
                        type="text"
                        name="username"
                        className="text-input"
                        autoComplete="off"
                        value={username}
                        onChange={usernameChangeHandler}
                    />
                </label>
                <label htmlFor="password">
                    Password{' '}
                    <input
                        type="password"
                        name="password"
                        className="text-input"
                        value={password}
                        onChange={passwordChangeHandler}
                    />
                </label>
                <button type="submit" className="btn" onClick={submitUser}>
                    {' '}
                    Sign in
                </button>
                {error && (
                    <p style={{ color: 'red' }}>
                        Username or password are invalid!{' '}
                    </p>
                )}
            </form>
        </div>
    );
}

export default SigninForm;
