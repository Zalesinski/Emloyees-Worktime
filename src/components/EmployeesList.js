import React, {useEffect} from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Employee from "./Employee";
import {useDispatch, useSelector} from "react-redux";
import {getEmployeesData} from "../redux/employeesReducer";
import {getWorkingLogData} from "../redux/worklogReducer";

function EmployeesList(props) {

    const dispatch = useDispatch();

    const employeesAreLoaded = useSelector(state => state.employees.isLoaded);
    const employees = useSelector(state => state.employees.employeesList);

    useEffect(() => {
        dispatch(getEmployeesData());
        dispatch(getWorkingLogData());
    }, [employeesAreLoaded]);

    return (
        <TableContainer>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>ФИО</TableCell>
                        <TableCell>Дата рождения</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees
                        .sort((e1, e2) => e1.lastName > e2.lastName ? 1 : -1)
                        .map((e) => (
                        <Employee key={e.id} id={e.id} fullName={`${e.lastName} ${e.firstName} ${e.middleName}`}
                                  bDay={e.birthDate}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default EmployeesList;