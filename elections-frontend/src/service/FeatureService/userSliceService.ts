import { LoginData, LoginResponse } from '../../types/serverTypes/LoginTypes'
import { RegisterResponse, RegisterData } from '../../types/serverTypes/RegisterTypes'
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;


export const loginUser = createAsyncThunk<LoginResponse, LoginData, { rejectValue: string }>(
    'user/login',
    async (loginData, { rejectWithValue }) => {
        try {
            const response = await axios.post<LoginResponse>(`${BASE_URL}/login`, loginData);
            const token = response.data.token
            console.log(token);
            if (token) {
                localStorage.setItem('authToken', token);
            }
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Login failed');
        }
    }
);

export const registerUser = createAsyncThunk<RegisterResponse, RegisterData, { rejectValue: string }>('user/register', async (registerData, { rejectWithValue })=>{
    try {
        const response = await axios.post<RegisterResponse>(`${BASE_URL}/register`, registerData);
        return response.data;
    } catch (error: any) {
        return rejectWithValue(error.response?.data?.message || 'Register failed');
    }
})

