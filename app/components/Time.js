import React from 'react';
import {connect} from 'react-redux';
import { initTime } from './../reducers/time.js';
import store from './../store.js';

//Layout class is a component that governs the layout of our webapp
class Time extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        store.dispatch(initTime());
        setInterval(() =>store.dispatch(initTime()), 1000*10);
    }
    render(){
        const {hour, minute, second} = store.getState().time;
        return(
            <span className="time-display">
                {hour}:{minute}
            </span>
        )
    }
}

// MapState
const mapStateToProps = (state) =>{
    return {
        time: state.time
    }
}

// MapDispatch
const mapDispatchToProps = (dispatch) =>{
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Time);