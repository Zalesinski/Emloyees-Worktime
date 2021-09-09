import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {selectEmployee} from "../redux/employeesReducer";
import "../styles.css"

const Employee = ({id, fullName, bDay}) => {

    const dispatch = useDispatch();

    const dateArray = bDay.split("-").map(n => n.length < 2 ? `0 + ${n}` : n);
    const formattedBirthDate = `${dateArray[2]}.${dateArray[1]}.${dateArray[0]}`;

    return (
        <TableRow>
            <TableCell>{id}</TableCell>
            <TableCell>
                <Link
                    onClick={() => dispatch(selectEmployee(id))}
                    to={`/worklog/${id}`}
                >
                    {fullName}
                </Link>
            </TableCell>
            <TableCell>{formattedBirthDate}</TableCell>
        </TableRow>
    )
};

export default Employee;
