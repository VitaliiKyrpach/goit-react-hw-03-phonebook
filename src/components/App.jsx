import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const localData = localStorage.getItem('users');
    if (localData && JSON.parse(localData).length) {
      this.setState({ contacts: JSON.parse(localData) });
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('users', JSON.stringify(this.state.contacts));
    }
  }

  createUser = data => {
    const find = this.state.contacts.find(({ name }) => name === data.name);
    if (find) {
      alert(`${find.name} is already in contacts`);
      return;
    }
    this.setState(prev => {
      return {
        contacts: [...prev.contacts, data],
      };
    });
  };

  handleChange = e => {
    this.setState({ filter: e.target.value });
  };

  handleDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filtered = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm createUser={this.createUser} />
        <h2>Contacts</h2>
        <Filter change={this.handleChange} value={this.state.filter} />
        <ContactList filtered={filtered} deleteFunc={this.handleDelete} />
      </div>
    );
  }
}
export default App;
