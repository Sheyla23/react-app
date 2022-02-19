import { configureStore } from '@reduxjs/toolkit'
import greetReducer from './greet'
export const store = configureStore({
  reducer: {
     greet:greetReducer
  },
})