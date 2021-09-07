import React, {useEffect} from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Employee from "./Employee";
import {connect} from "react-redux";
import {getEmployeesData, selectEmployee} from "../redux/reducerE";
import {getWorkingLogData} from "../redux/reducerW";

class EmployeesList extends React.Component {

    componentDidMount() {
       if (!this.props.employeesAreLoaded) this.props.getEmployeesData();
       if (!this.props.worklogIsLoaded) this.props.getWorkingLogData();
    }

    render() {

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
                        {this.props.employees.map((e) => (
                            <Employee key={e.id} id={e.id} fullName={`${e.lastName} ${e.firstName} ${e.middleName}`}
                                      bDay={e.birthDate} selectEmployee={this.props.selectEmployee} getEmployeesData={this.props.getEmployeesData} isLoaded={this.props.employeesAreLoaded}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

let mapStateToProps = state => {
    return {
        worklogIsLoaded: state.worklog.isLoaded,
        employeesAreLoaded: state.employees.isLoaded,
        employees: state.employees.employees,
        selectedEmployee: state.employees.selectedEmployee
    }
}
let mapDispatchToProps = {
    getEmployeesData,
    selectEmployee,
    getWorkingLogData
}
export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList);