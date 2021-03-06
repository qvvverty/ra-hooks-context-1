import { useState, useEffect } from 'react';
import ListItem from './ListItem';

export default function List(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_USERS_LIST)
      .then(response => response.json())
      .then(setUsers);
  }, []);

  return (
    <ul className="users-list">
      {users.map(user => <ListItem {...user} userClickHandler={props.userClickHandler} key={user.id} />)}
    </ul>
  )
}
