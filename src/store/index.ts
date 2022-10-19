import { configureStore } from '@reduxjs/toolkit';
// ...
import profilePageReducer from './profile_page';

export const store = configureStore({
  reducer: {
    active_profile_page: profilePageReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
