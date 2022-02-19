import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'hello',
}

export const greetSlice = createSlice({
  name: 'greet',
  initialState,
  reducers: {}
})

export default greetSlice.reducer