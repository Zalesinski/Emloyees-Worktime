import {getWorklog} from "../api";

const SET_WORKING_LOG = "SET_WORKING_LOG"

let initialState = {
    isLoaded: false,
    workingLog: []
}

const workLogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WORKING_LOG:
            return {
                ...state,
                isLoaded: true,
                workingLog: action.workingLog
            }
            break;
        default:
            return state;
    }
    return state;
}

export default workLogReducer;


export const setWorkingLog = (workingLog) => ({type: SET_WORKING_LOG, workingLog});

export const getWorkingLogData = () => {
    return async dispatch => {
        let data = await getWorklog();
        dispatch(setWorkingLog(data));
    }
}