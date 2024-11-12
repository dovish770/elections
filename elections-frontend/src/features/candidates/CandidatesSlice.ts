import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CandidateState from "../../types/reduxTypes/candidatesState";
import { FetchCandidatesResponse } from "../../types/serverTypes/FetchCandidatesType";
import {fetchCandidates} from '../../service/FeatureService/candidateSliceService'

const initialState: CandidateState = {
    candidates: [],
    status: "idle",
    error: null,
};

const candidateSlice = createSlice({
    name: 'Candidate',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchCandidates.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
        .addCase(fetchCandidates.fulfilled, (state, action: PayloadAction<FetchCandidatesResponse>) => {
          state.status = "succeeded";
          state.candidates = action.payload.candidate;
        })
        .addCase(fetchCandidates.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message || "Login failed";
        })
    }
  });
  

export default candidateSlice.reducer;