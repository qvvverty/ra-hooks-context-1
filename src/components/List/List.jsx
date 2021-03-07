import { useState, useEffect } from 'react';
import ListItem from './ListItem';
import fetchData from '../lib/fetchData';

export default function List({ setLoading, ...props }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData(process.env.REACT_APP_USERS_LIST, setUsers, setLoading);
  }, [setLoading]);

  return (
    <ul className="users-list">
      {users.map(user => <ListItem {...user} userClickHandler={props.userClickHandler} key={user.id} />)}
    </ul>
  )
}
