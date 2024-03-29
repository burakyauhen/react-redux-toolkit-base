import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
    name: 'text',
    initialState: {
        text: '',
    },
    reducers: {
        setText: (state, action) => {
           state.text = action.payload.text;
        },
    }
}); 

export const { setText } = textSlice.actions;

export default textSlice.reducer;