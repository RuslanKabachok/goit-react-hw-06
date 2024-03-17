import css from '../ContactList/ContactList.module.css';

import Contact from '../';

function ContactList({ data, onDelete }) {
  return (
    <ul className={css.list}>
      {data.map((contact) => (
        <li key={contact.id} className={css.item}>
          <Contact info={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
