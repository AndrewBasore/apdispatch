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
    today: new Date().getDay()
}

// Add flagger action-creator
const SUBMIT_SITE = "SUBMIT_SITE";
export const submitSite = site =>({
    type: SUBMIT_SITE, site
})

// Reducer
const calendarReducer =  (state=initState, action) =>{
    const newState = Object.assign({}, state);

    switch(action.type){ // @TODO write action constants 
        case SUBMIT_SITE:
            //Add the flagger to newState here
            break;
        default:
            return state;
    }
    return newState;
}

export default calendarReducer;