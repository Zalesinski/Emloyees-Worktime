import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const Worktime = ({from, to}) => {
    return (
        <TableRow>
            <TableCell>{from}</TableCell>
            <TableCell>{to}</TableCell>
        </TableRow>
    )
};

export default Worktime;
