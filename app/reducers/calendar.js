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


const getDayOfWeek = (num) =>{
    switch(num){
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        case 7:
            return "Sunday"
        default:
            return "Number is out of range"
    }
}

// Initial state
const initState = {
    today: {
        dayOfWeek: "",
        time: {
            hour: 0,
            minutes: 0,
            seconds: 0
        }
    }
}



// Add flagger action-creator
const SUBMIT_SITE = "SUBMIT_SITE";
export const submitSite = site =>({
    type: SUBMIT_SITE, site
})

// Update time 
const UPDATE_TIME = "UPDATE_TIME";
export const updateTime = () =>({
    type:UPDATE_TIME
});

// Reducer
const calendarReducer =  (state=initState, action) =>{
    const newState = Object.assign({}, state);

    switch(action.type){ // @TODO write action constants 
        case UPDATE_TIME:
            const now = new Date();
            newState.today.time = {
                hour: now.getHours(),
                minutes: now.getMinutes(),
                seconds: now.getSeconds()
            }
            newState.today.dayOfWeek = getDayOfWeek(now.getDay());
            break;
        default:
            return state;
    }
    return newState;
}

export default calendarReducer;