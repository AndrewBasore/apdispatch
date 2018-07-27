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
    allFlaggers: [],
    selectedFlagger: {}
}

// Add flagger action-creator
const ADD_FLAGGER = "ADD_FLAGGER";
export const flagAdded = flagger =>({
    type: ADD_FLAGGER, flagger
})

// Reducer
const flaggerReducer =  (state=initState, action) =>{
    const newState = Object.assign({}, state);

    switch(action.type){ // @TODO write action constants 
        case ADD_FLAGGER:
            //Add the flagger to newState here
            break;
        default:
            return state;
    }
    return newState;
}

export default flaggerReducer;