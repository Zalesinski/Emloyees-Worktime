import React, {useEffect} from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Worklog from "./Worklog";
import {useDispatch, useSelector} from "react-redux";
import {getEmployeesData, selectEmployee} from "../redux/employeesReducer";
import {getWorkingLogData} from "../redux/worklogReducer";
import {Link} from "react-router-dom";

function WorklogList(props) {
    let id = Number(props.match.params.id);
    let dispatch = useDispatch();

    const employeesList = useSelector(state => state.employees.employeesList)

    useEffect(() => {
        dispatch(getEmployeesData());
        dispatch(getWorkingLogData());
    }, []);

    useEffect(() => {
        dispatch(selectEmployee(id));
    }, [employeesList]);

    const worklog = useSelector(state => state.worklog.workingLog);

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
                        {worklog.filter(e => e.employee_id === id)
                            .map((e) => (
                                <Worklog key={e.id} from={e.from} to={e.to}/>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}


export default WorklogList;

