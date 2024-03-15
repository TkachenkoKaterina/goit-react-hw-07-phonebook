import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

const ContactItem = ({ contact, onDeleteContact }) => {
  const handleDeleteContact = () => {
    onDeleteContact(contact.id);
  };

  return (
    <li className={css.li}>
      {contact.name}: {contact.phone}
      <button className={css.button} onClick={handleDeleteContact}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
