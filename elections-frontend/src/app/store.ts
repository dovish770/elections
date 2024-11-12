import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/UsersSlice'
import candidateReducer from '../features/candidates/CandidatesSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    candidate: candidateReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;