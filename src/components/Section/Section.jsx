import React from 'react';
import css from './Section.module.css';
import PropTypes from 'prop-types';

 const Section = ({ title, children }) => {
  return (
    <div className={css.section}>
      <h2 className={css.heading}>{title}</h2>
      {children}
    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string
}

export default Section;
