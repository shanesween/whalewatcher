import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

// const useStyles = makeStyles({});

interface Props {
  data: Record<string, number>
}

export const BasicTable: (props: Props) => JSX.Element = (
  props: Props,
) => {
  // const classes = useStyles();

  const { data } = props;

  const colors = ['#535353', '#90949C', '#1C3322', '#98B9DF', '#335D9F'];
  const getColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableBody>
          {data && Object.keys(data).map((name) => (
            <TableRow key={name}>
              <TableCell>
                <FiberManualRecordIcon style={{ color: getColor() }} />
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
};

export default BasicTable;
