import React, { Component } from 'react';
import Phonebook from './Phonebook';
import Contacts from './Contacts';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // Filter set state function
  handleFilterClick = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  // Enter contact name and number function
  handlePhonebookClick = (inputName, inputNumber) => {
    const { contacts } = this.state;
    const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === inputName.toLowerCase()
    );

    if (existingContact) {
      alert(`${inputName} is already in contacts`);
    } else {
      const newContact = {
        id: inputName + inputNumber,
        name: inputName,
        number: inputNumber,
      };

      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  handleContactDelete = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('PhonebookContacts');

    if (savedContacts) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  render() {
    const { contacts, filter } = this.state;

    // Filter the contacts based on the filter state
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Phonebook
          createContact={this.handlePhonebookClick}
          contacts={contacts}
        />
        <Filter onChange={this.handleFilterClick} />
        <Contacts
          contacts={filteredContacts}
          onDeleteContact={this.handleContactDelete}
        />
      </div>
    );
  }
}
