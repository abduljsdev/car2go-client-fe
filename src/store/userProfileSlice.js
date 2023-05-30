import { createSlice } from '@reduxjs/toolkit';

export const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState: {
        userProfileData: {}
    },
    reducers: {
        setUserProfile: (state, action) => {
            state.userProfileData = action.payload;
        },
        clearUserProfile: (state,) => {
            state.userProfileData = null;
        }
    }
});

export const { setUserProfile, clearUserProfile } = userProfileSlice.actions;

export default userProfileSlice.reducer;