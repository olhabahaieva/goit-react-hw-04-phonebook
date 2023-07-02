import React, { Component } from 'react';
import css from './Phonebook.module.css';
import Section from 'components/Section';
import PropTypes from 'prop-types';

class Phonebook extends Component {
  state = {
    inputValue: '',
    inputNumber: '',
    contacts: [],
  };

  onChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  onNumberChange = e => {
    this.setState({
      inputNumber: e.target.value,
    });
  };

  handleButtonClick = e => {
    e.preventDefault();
    const { inputValue, inputNumber, contacts } = this.state;
    const { createContact } = this.props;

    const newContact = {
      name: inputValue,
      number: inputNumber,
    };

    const updatedContacts = [...contacts, newContact];

    createContact(inputValue, inputNumber);

    this.setState({
      inputValue: '',
      inputNumber: '',
      contacts: updatedContacts,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.contacts !== this.state.contacts &&
      this.state.contacts.length > 0
    ) {
      localStorage.setItem(
        'PhonebookContacts',
        JSON.stringify(this.state.contacts)
      );
    }
  }

  render() {
    const { inputValue, inputNumber } = this.state;

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
                onChange={this.onChange}
              />
              <label className={css.label} htmlFor="number">
                Number
              </label>
              <input
                type="tel"
                name="number"
                value={inputNumber}
                onChange={this.onNumberChange}
              />

              <button
                onClick={this.handleButtonClick}
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
  }
}

export default Phonebook;

Phonebook.propTypes = {
  inputValue: PropTypes.string,
  inputNumber: PropTypes.string,
  contacts: PropTypes.array,
};
