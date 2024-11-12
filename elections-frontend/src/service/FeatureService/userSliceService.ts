import { LoginData, LoginResponse } from '../../types/serverTypes/LoginTypes'
import { RegisterResponse, RegisterData } from '../../types/serverTypes/RegisterTypes'
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = process.env.REACT_APP_ELECTION_URL;

export const loginUser = createAsyncThunk<LoginResponse, LoginData, { rejectValue: string }>('user/login', async (loginData, { rejectWithValue }) => {
    try {
        const response = await axios.post<LoginResponse>(`${BASE_URL}/login`, loginData);

        if (response.status === 200) {
            return response.data;
        } else {
            return rejectWithValue('Login failed');
        }
    } catch (error: any) {
        return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
});


export const registerUser = createAsyncThunk<RegisterResponse, RegisterData, { rejectValue: string }>('user/register', async (registerData, { rejectWithValue })=>{
    try {
        const response = await axios.post<RegisterResponse>(`${BASE_URL}/register`, registerData);

        if (response.status === 201) {
            return response.data;
        } else {
            return rejectWithValue('Register failed');
        }
    } catch (error: any) {
        return rejectWithValue(error.response?.data?.message || 'Register failed');
    }
})
