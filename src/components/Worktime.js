import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {useSelector} from "react-redux";
import {violation} from "./Worktime.module.css";

const Worktime = ({from, to}) => {
    const currentEmployeeId = useSelector(state => state.employees.selectedEmployee.id)
    const allWorkLogs = useSelector(state => state.worklog.workingLog).filter(log => log.employee_id !== currentEmployeeId)
    let isViolation = true;



    let employeesPresent = 0;
    for(let i = 0; i < allWorkLogs.length; i++) {
        if(to >= allWorkLogs[i].from && to <= allWorkLogs[i].to) {
            employeesPresent++;
            if(employeesPresent >= 3) {
                isViolation = false;
                break;
            }
        }
    }

    return (
        <TableRow>
            <TableCell>{from}</TableCell>
            <TableCell> <div className={`${isViolation ? [violation] : null}`}>{to}</div> </TableCell>
        </TableRow>
    )
};

export default Worktime;
