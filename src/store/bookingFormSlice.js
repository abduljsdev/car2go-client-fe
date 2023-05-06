import { createSlice } from '@reduxjs/toolkit';

export const formDataSlice = createSlice({
    name: 'formData',
    initialState: {
        formObj: {}
    },
    reducers: {
        addFormData: (state, action) => {
            state.formObj = action.payload;
        }
    }
});

export const { addFormData } = formDataSlice.actions;

export default formDataSlice.reducer;