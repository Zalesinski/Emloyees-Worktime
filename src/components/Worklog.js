import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {useSelector} from "react-redux";
import "../styles.css"

const Worklog = ({from, to}) => {

    const currentEmployeeId = useSelector(state => state.employees.selectedEmployee.id)
    const allWorkLogs = useSelector(state => state.worklog.workingLog).filter(log => log.employee_id !== currentEmployeeId)

    let isViolation = true;
    let employeesPresent = 0;

    for(let i = 0; i < allWorkLogs.length; i++) {
        if(to >= allWorkLogs[i].from && to <= allWorkLogs[i].to) {
            employeesPresent++;
            // На данный момент работает так, что нарушение регистрируется,
            // если ДО ухода было менее трёх врачей.
            // Если по условию требуется, чтобы в отделении ПОСЛЕ ухода оставалось
            // три или более врача, то можно поменять цифру в условии с 2 на 3
            if(employeesPresent >= 2) {
                isViolation = false;
                break;
            }
        }
    }

    return (
        <TableRow>
            <TableCell>{from}</TableCell>
            <TableCell> <div className={`${isViolation ? "violation" : null}`}>{to}</div> </TableCell>
        </TableRow>
    )
};

export default Worklog;
