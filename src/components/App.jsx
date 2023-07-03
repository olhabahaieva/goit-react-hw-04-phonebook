import React, { useEffect, useState } from 'react';
import Phonebook from './Phonebook';
import Contacts from './Contacts';
import Filter from './Filter';

export const App = ({ contacts, filter }) => {
  const [contactsState, setContacts] = useState([]);
  const [filterState, setFilter] = useState('');

  // Filter set state function
  const handleFilterClick = e => {
    setFilter(e.target.value);
  };

  // Enter contact name and number function
  const handlePhonebookClick = (inputName, inputNumber, contactsState) => {
    const existingContact = contactsState.find(
      contact => contact.name.toLowerCase() === inputName.toLowerCase()
    );

    if (existingContact) {
      alert(`${inputName} is already in contacts`);
    } else {
      const newContact = {
        id: inputName + inputNumber,
        name: inputName,
        number: inputNumber,
      };
      setContacts([...contacts, newContact]);
    }
  };

  const handleContactDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    const savedContacts = localStorage.getItem('PhonebookContacts');

    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, [contacts, contactsState]);

  // Filter the contacts based on the filter state
  const filteredContacts = contactsState.filter(contact =>
    contact.name.toLowerCase().includes(filterState.toLowerCase())
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
      <Phonebook createContact={handlePhonebookClick} contacts={contacts} />
      <Filter onChange={handleFilterClick} />
      <Contacts
        contacts={filteredContacts}
        onDeleteContact={handleContactDelete}
      />
    </div>
  );
};
