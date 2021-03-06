export default function ListItem(props) {
  const onClick = () => {
    props.userClickHandler(props.id);
  }

  return <li className="users-list-item" onClick={onClick}>{props.name}</li>
}
