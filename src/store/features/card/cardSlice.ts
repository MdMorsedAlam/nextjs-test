import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  items:string[];
}

const initialState: CounterState = {
  items:[]
}

export const cardSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    add: (state,action) => {
      
      state.items.push(action.payload)
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { add } = cardSlice.actions

export default cardSlice.reducer