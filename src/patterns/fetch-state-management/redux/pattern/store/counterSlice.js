import { createSlice } from "@reduxjs/toolkit";

// Initial state for the counter
const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1; // Immer allows us to "mutate" state safely
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Export actions to dispatch
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export reducer to configure store
export default counterSlice.reducer;