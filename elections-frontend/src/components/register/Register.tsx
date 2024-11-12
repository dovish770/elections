import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../service/FeatureService/userSliceService';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { AnyAction } from 'redux'; // הוספתי את הייבוא של AnyAction

const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!username || !password) {
            setError('Please enter both username and password');
            return;
        }

        try {
            const RegisterDate = { username, password };
            const resultAction = await dispatch(registerUser(RegisterDate));

            if (registerUser.fulfilled.match(resultAction)) {
                console.log('registered in successfully');
                setPassword('')
                setUsername('')
                setError('')
                // navigate('/dashboard');
            } else {
                setError('Login failed');
            }
        } catch (err: any) {
            setError(err.message || 'Register failed');
        }
    };

    return (
        <div className='Register'>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input type="submit" value="Sign in" />
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
}

    export default Register;
