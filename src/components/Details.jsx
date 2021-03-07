import { useEffect, useState } from 'react';
import fetchData from './lib/fetchData';

export default function Details({ setLoading, ...props }) {
  const [selectedUserData, setUserData] = useState({});

  useEffect(() => {
    if (!props.selectedUserId) return;
    fetchData(process.env.REACT_APP_USER_DATA + props.selectedUserId + '.json', setUserData, setLoading);
  }, [props.selectedUserId, setLoading]);

  if (!Object.keys(selectedUserData).length) return null;

  return (
    <ul className="details-container">
      <li className="detail avatar-container">
        <img
          key={props.selectedUserId}
          className="avatar"
          src={selectedUserData.avatar}
          style={{ backgroundImage: 'url(avatar_placeholder.png)' }}
          alt="User avatar"
        />
      </li>
      <li className="detail">{selectedUserData.name}</li>
      {Object.entries(selectedUserData.details).map(detail => {
        return (
          <li className="detail" key={detail[0]}>
            {/* первая буква названия свойства - заглавная */}
            {detail[0][0].toUpperCase() + detail[0].slice(1)}: {detail[1]}
          </li>
        )
      })}
    </ul>
  )
}
