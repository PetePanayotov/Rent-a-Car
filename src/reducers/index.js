import {combineReducers} from 'redux';
import authReducer from './authReducer';
import searchReducer from './searchReducer';


const allReducers = combineReducers({
    auth: authReducer,
    search: searchReducer,
    
});

export default allReducers;