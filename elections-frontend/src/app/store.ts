import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/UsersSlice'
import candidateReducer from '../features/candidates/CandidatesSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    candidate: candidateReducer
  }
});

export default store;