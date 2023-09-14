export const Filter = ({ change, value }) => {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input type="text" name="filter" value={value} onChange={change} />
    </div>
  );
};
