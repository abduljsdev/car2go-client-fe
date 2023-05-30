import { createSlice } from '@reduxjs/toolkit';

const validateDataSlice = createSlice({
    name: 'validateDate',
    initialState: {
        validateDateState: false,
    },
    reducers: {
        validateDate(state) {
            state.validateDateState = true;
        },
        unValidateDate(state) {
            state.validateDateState = false;
        },
    },
});

export const { validateDate, unValidateDate } = validateDataSlice.actions;

export default validateDataSlice.reducer;