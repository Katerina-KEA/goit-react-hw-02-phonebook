import PropTypes from 'prop-types';
import { List, Item } from './ContactList.styled';

const ContactList = ({ contacts, name, filter, onDeleteBtn }) => {
  return (
    <List>
      {contacts.map(contact => {
        const { id } = contact;
        return (
          <Item key={contact.id}>
            <span>{contact.name}</span>
            <span>{contact.number}</span>
            <button onClick={() => onDeleteBtn(id)}>Delete</button>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteBtn: PropTypes.func.isRequired,
};