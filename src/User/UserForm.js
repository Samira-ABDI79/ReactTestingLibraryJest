import { useState } from 'react';

function UserForm({ onUserAdd }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    onUserAdd({ name, email });
  };

  return (
    <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xs' >
      <div className="mb-4" >
        <label htmlFor='name' className="block text-gray-700 text-sm font-bold mb-2" >Name</label>
        <input id='name' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="mb-4" >
        <label htmlFor='email'  className="block text-gray-700 text-sm font-bold mb-2" >Email</label>
        <input id='email' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' >Add User</button>
    </form>
  );
}

export default UserForm;
