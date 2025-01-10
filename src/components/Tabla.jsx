import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
} from "@mui/material";

const Tabla = ({ columns, data, title }) => {
    return (
        <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        {title && (
            <Typography
            variant="h6"
            sx={{ textAlign: "center", padding: 2, backgroundColor: "primary.main", color: "white" }}
            >
            {title}
            </Typography>
        )}
        <Table>
            <TableHead>
            <TableRow>
                {columns.map((column) => (
                <TableCell key={column.field} align={column.align || "left"} sx={{ fontWeight: "bold" }}>
                    {column.headerName}
                </TableCell>
                ))}
            </TableRow>
            </TableHead>
            <TableBody>
            {data.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                {columns.map((column) => (
                    <TableCell key={column.field} align={column.align || "left"}>
                    {row[column.field]}
                    </TableCell>
                ))}
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
};

export default Tabla;
