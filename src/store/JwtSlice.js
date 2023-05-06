
const { createSlice } = require('@reduxjs/toolkit')

const JwtSlice = createSlice({
    name: 'jwt',
    initialState: '',
    reducers:{
        pushJwt(state, action){
            state.push(action.payload)
        },
        resetJwt(state, action){
            state.push(action.payload)
        }
    },
});

export const { pushJwt } = JwtSlice.actions;
export default JwtSlice.reducer;