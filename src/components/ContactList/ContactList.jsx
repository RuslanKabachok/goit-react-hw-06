import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from '../ContactList/ContactList.module.css';
import Contact from '../Contact/Contact';
import { selectContacts } from '../../redux/contactsSlice';

function ContactList() {
  const data = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {data.map((contact) => (
        <li key={contact.id} className={css.item}>
          <Contact
            info={contact}
            onDelete={() => {
              dispatch(deleteContact(contact.id));
            }}
          />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
