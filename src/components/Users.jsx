import { useState } from 'react';
import List from './List/List';
import Details from './Details';
import Loading from './Loading';

export default function Users() {
  const [selectedUserId, selectUser] = useState('');
  const [isLoading, setLoading] = useState(true);

  const userClickHandler = id => {
    selectUser(id);
  }

  return (
    <>
      <Loading isLoading={isLoading} />
      <div className="users-container">
        <List userClickHandler={userClickHandler} setLoading={setLoading} />
        <Details selectedUserId={selectedUserId} setLoading={setLoading} />
      </div>
    </>
  )
}
