import { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

function User() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };

  return (
<>
<div className=' flex justify-center items-center py-16 flex-col' >
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </div>
    
</>
  );
}

export default User;
