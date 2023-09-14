export const ContactItem = ({ user, deleteFunc }) => {
  return (
    <li>
      {user.name}: {user.number}
      <button type="button" onClick={() => deleteFunc(user.id)}>
        Delete
      </button>
    </li>
  );
};
