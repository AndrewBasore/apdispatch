import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    auth: require('./auth').default
});

module.exports = rootReducer;