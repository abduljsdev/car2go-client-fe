import { createSlice } from '@reduxjs/toolkit';
const filterVehiclesSlice = createSlice({
    name: 'filterVehicles',
    initialState: [],
    reducers: {
        setFilterVehicles: (state, action) => {
            return action.payload;
        },
        getFilterVehicles: (state) => {
            return state;
        },
    },
});

export const { setFilterVehicles, getFilterVehicles } = filterVehiclesSlice.actions;
export default filterVehiclesSlice.reducer;