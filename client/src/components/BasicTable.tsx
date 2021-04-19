import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
  },
});

function createData(name: string, calories: number, color: string) {
  return { name, calories, color };
}

const rows = [
  createData('Gray Whale', 159, '#535353'),
  createData('Common Dolphin', 237, '#90949C'),
  createData('Pacific White Sided Dolphin', 262, '#1C3322'),
  createData('Fin Whale', 305, '#1C3322'),
  createData('Humpback Whale', 356, '#1C3322')
];

interface Props {
  data: Record<string, number>
}

export default function BasicTable(props: Props) {
  const classes = useStyles();

  const { data } = props

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {data && Object.keys(data).map((name) => (
            <TableRow key={name}>
              <TableCell>
                <FiberManualRecordIcon />
              </TableCell>
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell align="right">{data[name]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
