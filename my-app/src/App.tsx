import { useState, useEffect } from 'react';
import { User } from './types/User';
import UserList from './components/UserList/UserList';
import { userService } from './services/userService';
import './App.css';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await userService.getUsers();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  if (loading) {
    return <div className="app__loading">Loading users...</div>;
  }

  if (error) {
    return <div className="app__error">{error}</div>;
  }

  return (
    <div className="app">
      <h1>User Directory</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;
