import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { addContact } from '../../store/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'store/selectors';
import { nanoid } from '@reduxjs/toolkit';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'phone') {
      setPhone(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isDuplicate = contacts.some(
      existingContact =>
        existingContact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts!`);
    } else {
      dispatch(addContact({ id: nanoid(), name, phone }));
      setName('');
      setPhone('');
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.input} htmlFor="name">
        Name
      </label>
      <input
        className={css.form}
        id="name"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        required
      />

      <label className={css.label} htmlFor="tel">
        Phone
      </label>
      <input
        className={css.input}
        id="tel"
        type="tel"
        name="phone"
        value={phone}
        onChange={handleChange}
        required
      />

      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
