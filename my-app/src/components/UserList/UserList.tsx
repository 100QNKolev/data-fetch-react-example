import { User } from '../../types/User';
import UserCard from '../UserCard/UserCard';
import './UserList.css';

interface UserListProps {
  users: User[];
}

function UserList({ users }: UserListProps) {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList; 