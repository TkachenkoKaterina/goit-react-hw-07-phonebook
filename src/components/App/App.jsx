import Filter from 'components/Filter/Filter';
import Spinner from 'components/Spinner/Spinner';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'store/operations';
import { selectError, selectIsLoading } from 'store/selectors';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.titleFirst}>Phonebook</h1>
      <ContactForm />
      <Filter />
      {isLoading ? (
        <Spinner />
      ) : (
        isLoading && !error && <b>Request in progress...</b>
      )}
      <ContactList />
    </div>
  );
};
