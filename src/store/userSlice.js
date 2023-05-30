import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: { user: null },
    reducers: {
        logoutUser: (state) => {
            state.user = null;
        },
    },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;