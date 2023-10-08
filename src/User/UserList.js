import { v4 as uuidv4 } from 'uuid';
function UserList({ users }) {
  
  const renderedUsers = users.map((user) => {
    const uniqueKey = uuidv4();
    return (
      <tr key={uniqueKey}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    );
  });

  return (
    <table className=" text-sm text-left text-gray-500 dark:text-gray-400 w-[20rem]" >
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >
        <tr>
          <th className="px-6 py-3" >Name</th>
          <th className="px-6 py-3" >Email</th>
        </tr>
      </thead>
      <tbody data-testid="users" >{renderedUsers}</tbody>
    </table>
  );
}

export default UserList;
