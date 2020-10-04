import React from 'react';
import PropTypes from 'prop-types';
import {CellTypes} from "../../const.js";

class Cell extends React.Component {
  render() {
    const content = this.props.content;
    const type = this.props.type;

    // switch выбран с заделом на будущее
    switch (type) {
      case CellTypes.TITLE:
        return <h2 className="table__cell">{content}</h2>;
      default:
        return <p className="table__cell">{content}</p>;
    }
  }
}

Cell.propTypes = {
  content: PropTypes.string,
  type: PropTypes.string,
};

export default Cell;
