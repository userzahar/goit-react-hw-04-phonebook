import { Form } from "./Form/Form";
import { nanoid } from 'nanoid';
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { useState,useEffect } from "react";

export function App () {
  const [filter, setFilter] = useState('');
  const[contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || [
    { id: 'id-1', name: 'Volodymyr Zelenskyi', number: '+380-459-12-5678' },
    { id: 'id-2', name: 'Petro Poroshenko', number: '+380-443-89-1256' },
    { id: 'id-3', name: 'Viktor Yushchenko', number: '+380-645-17-7943' }])
  
  const createContacts = (data) => {
    if (contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is alredy in contacts`)
      return false;
    } else {
      setContacts((prev) => {
        return [{ id: nanoid(), name: data.name, number: data.number }, ...prev] 
      })
    }
  }
  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === "filter") {
      setFilter(value)
    }

  }
  const filteredContacts =()=> {
        if (!filter.length) {
            return contacts;
        }
        return contacts.filter(({name}) => {
      return name.toLowerCase().indexOf(filter.toLowerCase()) > -1;
        })
  }
  const handleDelete = (id) => {
    return setContacts(() => contacts.filter(contact => contact.id !== id));
  }        
   useEffect(() => {

    localStorage.setItem('contacts', JSON.stringify(contacts))

  }, [contacts])
  
  return <>
      <h1>Phonebook</h1>
      <Form createContacts={createContacts} />
      <h2>Contacts</h2>
    <Filter handleChange={handleChange} />
    <ContactList deleteItem={handleDelete} filterList={()=>filteredContacts()}  />
  </>
}
  
