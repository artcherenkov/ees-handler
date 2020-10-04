import React from 'react';
import PropTypes from 'prop-types';

import Cell from "../cell/cell.jsx";
import {CellTypes} from "../../const.js";
import {nanoid} from "nanoid";

class ObjectRow extends React.PureComponent {
  render() {
    let obj = this.props.object;
    const {amount, pricePerUnit} = obj;
    const fullPrice = +amount * parseFloat(pricePerUnit);
    obj = Object.assign(
        {},
        obj,
        {fullPrice: fullPrice.toFixed(3)}
    );
    const cells = [];

    // временное решение по добавлению порядкового номера объекта строительства
    cells.push(<Cell key={nanoid()} content={`1`} type={CellTypes.DEFAULT} />);

    for (let key of Object.keys(obj)) {
      cells.push(<Cell key={nanoid()} content={obj[key]} type={CellTypes.DEFAULT} />);
    }

    return (
      <div className="table__row">
        {cells}
      </div>
    );
  }
}

export default ObjectRow;

ObjectRow.propTypes = {
  object: PropTypes.object
};
