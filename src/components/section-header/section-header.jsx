import React from 'react';
import PropTypes from 'prop-types';

class SectionHeader extends React.Component {
  render() {
    const type = this.props.type;
    return (
      <div className="table__row">
        <h3 className="table__cell table__cell--section-title">{type}</h3>
      </div>
    );
  }
}

SectionHeader.propTypes = {
  type: PropTypes.string
};

export default SectionHeader;
