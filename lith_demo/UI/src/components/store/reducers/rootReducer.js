import {combineReducers} from 'redux';

import authReducer from './authReducer';
import userReducer from './userReducer';
import driversReducer from './driversReducer';
import carsReducer from './carsReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    drivers : driversReducer,
    cars: carsReducer
})

export default rootReducer;