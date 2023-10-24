import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users/slice';
import { persistanceLSMiddleware } from '../middleware/persitanceLS.middleware';
import { syncWithDatabase } from '../middleware/syncWithDatabase.middleware';

export const store = configureStore( {
  reducer: {
    users: userReducer
  },
  middleware: [persistanceLSMiddleware, syncWithDatabase]
} );

//Type state on redux
// ReturnType is a tool of TS
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;