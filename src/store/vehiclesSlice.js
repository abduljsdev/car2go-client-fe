import { createSlice } from '@reduxjs/toolkit';
const vehiclesSlice = createSlice({
    name: 'vehicles',
    initialState: [],
    reducers: {
        setVehicles: (state, action) => {
            return action.payload;
        },
    },
});

export const { setVehicles } = vehiclesSlice.actions;
export default vehiclesSlice.reducer;