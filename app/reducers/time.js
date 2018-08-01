/* 
 * Author: Andrew Basore
 * 
 * This reducer handles all state management to handle all information
 * of the flaggers, sorting by office
 * 
 * Action constants are placed above their action-creators.
 * 
*/

// Dependencies


// Initial state
const initState = {
    hour: 0,
    minute: 0,
    second: 0
}

// Add flagger action-creator
const UPDATE_TIME = "UPDATE_TIME";
export const updateTime = () =>({
    type: UPDATE_TIME
})

// Reducer
const timeReducer =  (state=initState, action) =>{
    // Copy prevState into new object to enforce immutability.
    const newState = Object.assign({}, state);

    switch(action.type){ // @TODO write action constants 
        case UPDATE_TIME:
            //Create new date and update newState
            let newNow = new Date();
            newState.hour = newNow.getHours();
            newState.minute = newNow.getMinutes();
            newState.second = newNow.getSeconds();
            break;
        default:
            return state;
    }
    return newState;
}

// Init time loop
export const initTime = () =>
    dispatch =>{
        dispatch(updateTime());
    }

export default timeReducer;