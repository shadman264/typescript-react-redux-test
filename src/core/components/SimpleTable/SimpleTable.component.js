import React, {Component} from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class SimpleTable extends Component {
  
  render() {
    const tableHeadList = this.props.data.tableHead.map((headValue, headIndex) => {
      return(
        <TableCell key={`${headValue}_${headIndex}`} align="center">{headValue}</TableCell>
      );
    });
    const tableRowList = this.props.data.tableData.map((row, rowIndex) => {
      const rowCellList = [];
      Object.keys(row).forEach((key, colIndex) => {
        rowCellList.push(<TableCell key={`${key}_${colIndex}`} align="center">{row[key]}</TableCell>);
      });
      return(
        <TableRow key={rowIndex}>
          {rowCellList}
        </TableRow>
      );
    });
    return(
      <Paper className="table-container">
        <Table className="simple-table">
          <TableHead className="simple-table-head">
            <TableRow>
              {tableHeadList}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRowList}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default SimpleTable;