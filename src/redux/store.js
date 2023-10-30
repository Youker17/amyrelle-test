import { configureStore } from '@reduxjs/toolkit';
import AppSlice from '@/redux/slice';

export const store = configureStore({
  reducer: {
    app: AppSlice,
  },
});


