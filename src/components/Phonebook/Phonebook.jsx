import React, { useEffect, useState } from 'react';
import css from './Phonebook.module.css';
import Section from 'components/Section';
import PropTypes from 'prop-types';

const Phonebook = ({ inputValue, inputNumber, contacts, createContact }) => {
  const [inputValueState, setInputValue] = useState('');
  const [inputNumberState, setInputNumber] = useState('');
  const [contactsState, setContacts] = useState([]);

  const onChange = e => {
    setInputValue(e.target.value);
  };

  const onNumberChange = e => {
    setInputNumber(e.target.value);
  };

  const handleButtonClick = e => {
    e.preventDefault();

    const newContact = {
      name: inputValueState,
      number: inputNumberState,
    };

    const updatedContacts = [...contacts, newContact];

    createContact(inputValueState, inputNumberState);
    setInputValue('');
    setInputNumber('');
    setContacts(updatedContacts);
  };

  useEffect(() => {
    if (contacts !== contactsState && contacts.length > 0) {
      localStorage.setItem('PhonebookContacts', JSON.stringify(contacts));
    }
  }, [contacts, contactsState]);

  return (
    <>
      <Section title="Phonebook">
        <div className={css.phonebook}>
          <form className={css.form} action="">
            <label className={css.label} htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={inputValue}
              onChange={onChange}
            />
            <label className={css.label} htmlFor="number">
              Number
            </label>
            <input
              type="tel"
              name="number"
              value={inputNumber}
              onChange={onNumberChange}
            />

            <button
              onClick={handleButtonClick}
              className={css.button}
              name="submit"
              type="submit"
            >
              Add contact
            </button>
          </form>
        </div>
      </Section>
    </>
  );
};

Phonebook.propTypes = {
  inputValue: PropTypes.string,
  inputNumber: PropTypes.string,
  contacts: PropTypes.array,
};

export default Phonebook;
