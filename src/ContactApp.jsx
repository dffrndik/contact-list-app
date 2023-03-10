import React from 'react';
import ContactList from './ContactList';
import ContactInput from './ContactInput'
import { getData } from './data';
 
export default class ContactApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: getData()
    };
    this.onDelete = this.onDelete.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  }

  onDelete(id) {
    const contacts = this.state.contacts.filter(c => c.id !== id);
    this.setState({contacts});
  }

  onAddContactHandler({name, tag}) {
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: +new Date(),
            name,
            tag,
            imageUrl: './images/default.jpg'
          }
        ]
      }
    })
  }

 
  render() {
    return (
      <div className="contact-app">
        <h1>Aplikasi Kontak</h1>
        <h2>Tambah Kontak</h2>
        <ContactInput addContact={this.onAddContactHandler} />
        <h2>Daftar Kontak</h2>
        <ContactList contacts={this.state.contacts} onDelete={this.onDelete} />
      </div>
    )
  };
}
 
