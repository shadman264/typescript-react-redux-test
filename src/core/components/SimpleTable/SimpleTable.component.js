import React, {Component} from 'react';
import Proptypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import _isEqual from 'lodash/isEqual';
import _startCase from 'lodash/startCase';
import _toLower from 'lodash/toLower';

/**
 * This component will display json data in tabular format
 * @prop {object: required} data : incoming data structured as 
 * data = { 
 *   {array of string} tableHead: column headers,
 *   {array of object} tableData: table rows containing column data}
 * }
 * @prop {number} selectedRowIndex : index of the selected row
 */
class SimpleTable extends Component {
  /**
   * This method will prevent unnecessary renders
   * This component should be updated only if SimpleTable's properties are updated
   * @param {object} nextProps : incoming properties
   * @param {object} nextState : incoming states 
   */
  shouldComponentUpdate(nextProps, nextState) {
    if(_isEqual(this.props.data, nextProps.data) && this.props.selectedRowIndex === nextProps.selectedRowIndex) {
      return false;
    }
    return true;
  }
  
  render() {
    // To handle no data to be shown
    if(this.props.data.tableData.length === 0) {
      return(
        <Paper className="table-container">
          <h1 className="no-data">No Content Found</h1>
        </Paper>
      );
    }

    // To create column headers container
    const tableHeadList = Object.keys(this.props.data.tableData[0]).map((key, index) => {
      const headValue = _startCase(_toLower(key));
      return(
        <TableCell
          key={`${headValue}_${index}`}
          align="center"
        >
          {headValue}
        </TableCell>
      );
    });

    // To create table rows container
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

      // To highlight table row if it is selected through search
      let rowClass = "";
      if(this.props.selectedRowIndex === rowIndex) {
        rowClass = "selected-row";
      }

      // Return collection of rows
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