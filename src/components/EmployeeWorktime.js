import React, {useEffect} from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Worktime from "./Worktime";
import {connect, useDispatch} from "react-redux";
import {getEmployeesData, selectEmployee} from "../redux/reducerE";
import {getWorkingLogData} from "../redux/reducerW";
import {Link} from "react-router-dom";

function EmployeeWorktime(props) {
    let {id} = props.match.params
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getEmployeesData());
        dispatch(selectEmployee(id));
        dispatch(getWorkingLogData());
    })

    return (
        <>
            <Link to="/">К списку всех сотрудников</Link>
        <TableContainer>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Пришёл</TableCell>
                        <TableCell>Ушёл</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.worklog.filter(e => e.employee_id == id)
                        .map((e) => (
                            <Worktime key={e.id} from={e.from} to={e.to}/>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
            </>
    );
}

let mapStateToProps = state => {
    return {
        employees: state.employees.employees,
        selectedEmployee: state.employees.selectedEmployee,
        worklog: state.worklog.workingLog
    }
}


export default connect(mapStateToProps, null)(EmployeeWorktime);

