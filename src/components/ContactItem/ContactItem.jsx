import React from 'react';
// import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'store/operations';

const ContactItem = ({ contact, onDeleteContact }) => {
  // const dispatch = useDispatch();

  const handleDeleteContact = () => {
    onDeleteContact(contact.id);
  };

  return (
    <li className={css.li}>
      {contact.name}: {contact.number}
      <button className={css.button} onClick={handleDeleteContact}>
        Delete
      </button>
    </li>
  );
};

// ContactItem.propTypes = {
//   contact: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   }).isRequired,
//   onDeleteContact: PropTypes.func,
// };

export default ContactItem;
