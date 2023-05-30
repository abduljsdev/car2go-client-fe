import { combineReducers, configureStore } from '@reduxjs/toolkit';
import JwtReducer from './JwtSlice';
import authReducer from './authSlice';
import vehiclesReducer from './vehiclesSlice';
import autoClickBtnReducers from './autoClickSlice';
import formDataReducer from './bookingFormSlice';
import validateDataReducer from './validateDateSlice';
import userProfileReducer from './userProfileSlice';


import {
    persistReducer,

} from 'redux-persist'

import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['formData'],
}

let rootReducer = combineReducers({
    jwt: JwtReducer,
    auth: authReducer,
    vehicles: vehiclesReducer,
    formData: formDataReducer,
    autoClickButton: autoClickBtnReducers,
    dateValidator: validateDataReducer,
    userProfile: userProfileReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
export default store;
