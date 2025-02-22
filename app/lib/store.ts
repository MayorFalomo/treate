'use client'
import { configureStore } from "@reduxjs/toolkit";
import themeSlice from './features/ThemeSlice';

const store = () => {
  return configureStore({
    reducer: {
      //All other slices would be here
      theme: themeSlice
    },
  });
};

export default store;