import { createSlice } from '@reduxjs/toolkit';

export const formDataSlice = createSlice({
    name: 'formData',
    initialState: {
        formObj: {}
    },
    reducers: {
        addFormData: (state, action) => {
            state.formObj = action.payload;
        },
        clearAddFormData: (state,) => {
            state.formObj = null;
        }
    }
});

export const { addFormData, clearAddFormData } = formDataSlice.actions;

export default formDataSlice.reducer;