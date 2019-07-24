import React, {Component} from 'react';
import Proptypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import _isEqual from 'lodash/isEqual';

class SimpleTable extends Component {

  // This method is to prevent unnecessary renders
  // This component should be updated only if SimpleTable's properties are updated
  shouldComponentUpdate(nextProps, nextState) {
    if(_isEqual(this.props.data, nextProps.data) && this.props.selectedRowIndex === nextProps.selectedRowIndex) {
      return false;
    }
    return true;
  }
  
  render() {
    const tableHeadList = this.props.data.tableHead.map((headValue, headIndex) => {
      return(
        <TableCell
          key={`${headValue}_${headIndex}`}
          align="center"
        >
          {headValue}
        </TableCell>
      );
    });

    const tableRowList = this.props.data.tableData.map((row, rowIndex) => {
      const rowCellList = [];
      Object.keys(row).forEach((key, colIndex) => {
        rowCellList.push(
        <TableCell
          key={`${key}_${colIndex}`}
          align="center"
        >
          {row[key]}
        </TableCell>
        );
      });

      let rowClass = "";
      if(this.props.selectedRowIndex === rowIndex) {
        rowClass = "selected-row";
      }

      return(
        <TableRow
          key={rowIndex}
          className={rowClass}
        >
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
          <TableBody className="simple-table-row">
            {tableRowList}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

SimpleTable.propTypes = {
  data: Proptypes.object.isRequired,
  selectedRowIndex: Proptypes.number
}

SimpleTable.defaultProps = {
  selectedRowIndex: -1
}

export default SimpleTable;