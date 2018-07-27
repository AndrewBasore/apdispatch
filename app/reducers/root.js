import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    auth: require('./auth').default,
    flaggers: require('./flaggers').default,
    calendar: require('./calendar').default
});

module.exports = rootReducer;