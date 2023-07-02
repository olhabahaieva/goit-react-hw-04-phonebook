import React, { Component } from 'react';
import css from './Filter.module.css';

class Filter extends Component {
  render() {
    const { onChange } = this.props;

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
}

export default Filter;
