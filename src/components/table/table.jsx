import React from 'react';
import {HEADERS, SectionTypes} from '../../const.js';

import HeaderSection from "../headers-section/headers-section.jsx";
import Section from "../section/section.jsx";

class Table extends React.PureComponent {
  render() {
    return <div className="table">
      <HeaderSection headers={HEADERS} />
      <Section type={SectionTypes.MAIN} />
    </div>;
  }
}

export default Table;
