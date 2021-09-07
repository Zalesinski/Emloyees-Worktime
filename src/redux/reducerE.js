import {getEmployees} from "../api";

const SET_EMPLOYEES = "SET_EMPLOYEES"
const SELECT_EMPLOYEE = "SELECT_EMPLOYEE"

let initialState = {
    isLoaded: false,
    employees: [],
    selectedEmployee: null
}

const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMPLOYEES:
            return {
                ...state,
                isLoaded: true,
                employees: action.employees
            }
            break;
            case SELECT_EMPLOYEE:
            return {
                ...state,
                selectedEmployee: state.employees.filter(e => e.id == action.selectedEmployeeId)[0]
            }
            break;
        default:
            return state;
    }
    return state;
}

export default employeesReducer;

export const selectEmployee = (selectedEmployeeId) => ({type: SELECT_EMPLOYEE, selectedEmployeeId});

export const setEmployees = (employees) => ({type: SET_EMPLOYEES, employees});

export const getEmployeesData = () => {
    return async dispatch => {
        let data = await getEmployees();
        dispatch(setEmployees(data));
    }
}