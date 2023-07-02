import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ onChange }) => {

    return (
      <div className={css.filter}>
        <label className={css.label} htmlFor="search">
          Find contacts by name
        </label>
        <input
          onChange={onChange}
          className={css.filterInput}
          type="search"
        />
      </div>
    );
  }

Filter.propTypes = {
  onChange: PropTypes.func
}
export default Filter;
