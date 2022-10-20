import { configureStore } from '@reduxjs/toolkit';
// ...
import profilePageReducer from './profile_page';
import firstData from './firstData';
import secondData from './secondData';
import threeData from './threeData';

export const store = configureStore({
  reducer: {
    active_profile_page: profilePageReducer,
    threeData,
    firstData,
    secondData,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
