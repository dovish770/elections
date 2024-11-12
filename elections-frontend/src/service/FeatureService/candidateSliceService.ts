import {FetchCandidatesResponse} from '../../types/serverTypes/FetchCandidatesType'
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchCandidates = createAsyncThunk<FetchCandidatesResponse, { rejectValue: string }>('user/login', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get<FetchCandidatesResponse>(`${BASE_URL}/login`);

        if (response.status === 200) {
            return response.data;
        } else {
            return rejectWithValue('Login failed');
        }
    } catch (error: any) {
        return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
});