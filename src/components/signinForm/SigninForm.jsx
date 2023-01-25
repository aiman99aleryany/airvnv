import React, { useState } from 'react';
import useStoreUsers from '../../store/store-users';
import './SigninForm.scss';
import { setLocalStorage } from '../../store/localStorage';
import { motion } from 'framer-motion';
function SigninForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const users = useStoreUsers((state) => state.users);

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
        const isFieldsExist = isUsernameExist || isPasswordExist ? true : false;

        if (isFieldsExist) {
            const thisUser = users.filter((user) => {
                return user.username === username && user.password === password;
            });

            if (thisUser.length === 1) {
                setLocalStorage('currentUserId', thisUser[0].id);
                setLocalStorage('isUserSignedIn', true);
                window.location.href = '/';
            } else {
                setError(true);
            }
        }

        return;
    };

    return (
        <div className="form-wrapper">
            <div className="animated-border"></div>
            <form>
                <h1>Sign in</h1>

                <input
                    type="text"
                    name="username"
                    className="text-input"
                    autoComplete="off"
                    value={username}
                    onChange={usernameChangeHandler}
                    placeholder="Username..."
                />

                <input
                    type="password"
                    name="password"
                    className="text-input"
                    value={password}
                    onChange={passwordChangeHandler}
                    placeholder="Password..."
                />

                <motion.button
                    type="submit"
                    className="btn"
                    onClick={submitUser}
                    whileHover={{ scale: 1.1 }}
                >
                    {' '}
                    Sign in
                </motion.button>
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
