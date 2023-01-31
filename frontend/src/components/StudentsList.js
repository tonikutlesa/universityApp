import { useEffect } from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useStudentsStore } from "../store/students";

const StudentsList = () => {
  const { students, fetchStudents } = useStudentsStore((state) => ({
    students: state.students,
    fetchStudents: state.fetchStudents,
  }));

  useEffect(() => {
    fetchStudents("http://localhost:8000/students/");
  }, [fetchStudents]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Phone number</TableCell>
            <TableCell align="right">Major</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow
              key={student.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.name}
              </TableCell>
              <TableCell align="right">{student.email}</TableCell>
              <TableCell align="right">{student.address}</TableCell>
              <TableCell align="right">{student.phoneNumber}</TableCell>
              <TableCell align="right">{student.majorId.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentsList;
