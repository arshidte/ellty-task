interface Props {
  name: string;
  title: string;
  checked: boolean;
  onChange: any;
}
const ListItem = ({ name, title, checked, onChange }: Props) => {
  return (
    <div className="list-item checkbox-container">
      <label htmlFor="myCheckbox">{title}</label>
      <input
        name={name}
        checked={checked}
        onChange={onChange}
        type="checkbox"
        id="myCheckbox"
      />
    </div>
  );
};

export default ListItem;
