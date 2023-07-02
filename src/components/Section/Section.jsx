import React from 'react';
import css from './Section.module.css';

 const Section = ({ title, children }) => {
  return (
    <div className={css.section}>
      <h2 className={css.heading}>{title}</h2>
      {children}
    </div>
  )
}

export default Section;
