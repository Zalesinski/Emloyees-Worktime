import {getEmployees} from "../api";

const SET_EMPLOYEES = "SET_EMPLOYEES"
const SELECT_EMPLOYEE = "SELECT_EMPLOYEE"

let initialState = {
    isLoaded: false,
    employeesList: [],
    selectedEmployee: null
}

const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMPLOYEES:
            return {
                ...state,
                isLoaded: true,
                employeesList: action.employeesList
            }
        case SELECT_EMPLOYEE:
            return {
                ...state,
                selectedEmployee: state.employeesList.find(e => e.id === action.selectedEmployeeId)
            }
        default:
            return state;
    }
}

export default employeesReducer;

export const selectEmployee = (selectedEmployeeId) => ({type: SELECT_EMPLOYEE, selectedEmployeeId});

export const setEmployees = (employeesList) => ({type: SET_EMPLOYEES, employeesList});

export const getEmployeesData = () => {
    return async dispatch => {
        let data = await getEmployees();
        dispatch(setEmployees(data));
    }
}