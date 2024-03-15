import React, { useEffect } from 'react';
import ContactItem from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'store/selectors';
import Filter from 'components/Filter/Filter';
import { fetchContacts } from 'store/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts);
  }, [dispatch]);

  console.log('filteredContacts :>> ', filteredContacts);

  return (
    <div>
      <Filter />
      <ul className={css.ul}>
        {filteredContacts.map(contact => {
          return <ContactItem key={contact.id} contact={contact} />;
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
