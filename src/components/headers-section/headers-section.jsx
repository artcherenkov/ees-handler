import React from 'react';
import PropTypes from 'prop-types';

import Cell from '../cell/cell.jsx';
import EmptyRow from "../empty-row/empty-row.jsx";
import {nanoid} from 'nanoid';
import {CellTypes} from "../../const.js";

class HeaderSection extends React.Component {
  render() {
    const headers = [];
    const columnNums = [];
    this.props.headers.forEach((header, index) => {
      headers.push(
          <Cell content={header} key={nanoid()} type={CellTypes.TITLE}/>
      );
      columnNums.push(
          <Cell content={(index + 1).toString()} key={nanoid()} type={CellTypes.DEFAULT}/>
      );
    });

    return (
      <React.Fragment>
        <div className="table__row table__headers">{headers}</div>
        <div className="table__row">{columnNums}</div>
        <EmptyRow />
      </React.Fragment>
    );
  }
}

HeaderSection.propTypes = {
  headers: PropTypes.array
};

export default HeaderSection;
