import { createSlice } from '@reduxjs/toolkit';

const autoClickSlice = createSlice({
    name: 'autoClick',
    initialState: {
        clickBtn: false,
    },
    reducers: {
        clickBtn(state) {
            state.clickBtn = true;
        },
        unClickBtn(state) {
            state.clickBtn = false;
        },
    },
});

export const { clickBtn, unClickBtn } = autoClickSlice.actions;

export default autoClickSlice.reducer;
