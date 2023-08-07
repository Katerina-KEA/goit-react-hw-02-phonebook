import PropTypes from 'prop-types';
// import { Component } from 'react';
import React from 'react';
import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = ({ filter, onFilter }) => {
  render()
  {
    const { filter, onFilter } = this.props;

    return (
      <FilterLabel>
        Find contacts by name
        <FilterInput type="text" onChange={onFilter} value={filter} />
      </FilterLabel>
    );
  }
}

  export default Filter;

  Filter.propTypes = {
    onFilter: PropTypes.func.isRequired,
    filter: PropTypes.string,
  }
  
