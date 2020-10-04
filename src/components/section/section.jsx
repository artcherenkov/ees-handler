import React from 'react';
import PropTypes from 'prop-types';

import SectionHeader from "../section-header/section-header.jsx";
import ObjectRow from "../object-row/object-row.jsx";
import {FirstObject} from "../../const.js";

class Section extends React.Component {
  render() {
    const type = this.props.type;
    return (
      <React.Fragment>
        <SectionHeader type={type} />
        <ObjectRow object={FirstObject} />
      </React.Fragment>
    );
  }
}

Section.propTypes = {
  type: PropTypes.string
};

export default Section;
