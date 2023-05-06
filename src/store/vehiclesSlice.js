import { createSlice } from '@reduxjs/toolkit';
const vehiclesSlice = createSlice({
    name: 'vehicles',
    initialState: [],
    reducers: {
        setVehicles: (state, action) => {
            return action.payload;
        },
        getVehicles: (state) => {
            return state;
        },
    },
});

export const { setVehicles, getVehicles } = vehiclesSlice.actions;
export default vehiclesSlice.reducer;