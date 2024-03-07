import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/filterSlice';
import { selectContacts } from 'redux/selectors';

import { ContactListStyled } from './ContactList.styled';
import { ContactListItems } from './ContactListItems';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(getFilterValue);

  const findContact = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };
  return (
    <ContactListStyled>
      {findContact().map(({ id, name, number }) => {
        return (
          <ContactListItems
            key={id}
            name={name}
            number={number}
            contactId={id}
          />
        );
      })}
    </ContactListStyled>
  );
};

export default ContactList;
