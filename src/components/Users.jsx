import { useState } from 'react';
import List from './List/List';
import Details from './Details';

export default function Users() {
  const [selectedUserId, selectUser] = useState('');

  const userClickHandler = id => {
    selectUser(id);
  }

  return (
    <div className="users-container">
      <List userClickHandler={userClickHandler} />
      <Details selectedUserId={selectedUserId} />
    </div>
  )
}
