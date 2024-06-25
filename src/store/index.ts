import { configureStore } from "@reduxjs/toolkit";
import pollformReducer from './pollform';

export const store = configureStore({
    reducer: {
        pollform: pollformReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
