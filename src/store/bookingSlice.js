import { createSlice } from '@reduxjs/toolkit';
const bookingSlice = createSlice({
    name: 'booking',
    initialState: {},
    reducers: {
        setForData: (state, action) => {
            return action.payload;
        },
        getFormData: (state) => {
            return state;
        },
    },
});

export const { setForData, getFormData } = bookingSlice.actions;
export default bookingSlice.reducer;