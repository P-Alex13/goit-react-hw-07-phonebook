import Alert from '@mui/material/Alert';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

import {
  ContactForm,
  ContactList,
  Filter,
  Footer,
  Loader,
  Section,
} from '../components';
import { Main } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}
      <Main>
        <Section title="Phonebook">
          <ContactForm />
        </Section>

        <Section title="Contacts">
          <Filter />
          {isLoading && <Loader />}
          <ContactList />
        </Section>
      </Main>
      <Footer />
    </>
  );
};
