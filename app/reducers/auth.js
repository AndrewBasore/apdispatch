/* 
 * Author: Andrew Basore
 * 
 * This reducer handles all state management to handle authentication
 * and permissions of users. APTeam members login here before interacting
 * with the calendar.
 * 
 * Action constants are placed above their action-creators.
 * 
*/


// Dependencies
import axios from 'axios';
import {browserHistory} from 'react-router';


// Initial state
const initState = {
    user: {}
}

const reducer = (state=initState, action) =>{
    const newState = Object.assign({}, state);

    switch(action.type){ // @TODO write action constants 
        case AUTHENTICATED:
            newState.user = action.user;
            break;
        default:
            return state;
    }
    return newState;
}