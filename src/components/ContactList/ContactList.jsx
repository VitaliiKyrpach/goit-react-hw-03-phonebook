import { ContactItem } from '../ContactItem/ContactItem';
export const ContactList = ({ filtered, deleteFunc }) => {
  return (
    <ul>
      {filtered.map(user => {
        return (
          <ContactItem key={user.id} user={user} deleteFunc={deleteFunc} />
        );
      })}
    </ul>
  );
};
