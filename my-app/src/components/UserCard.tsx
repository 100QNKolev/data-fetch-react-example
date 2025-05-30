import React from 'react';
import './UserCard.css';
import { User } from '../types/User';

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {
  return (
    <div className="user-card">
      <h3 className="user-card__name">{user.name}</h3>
      <p className="user-card__email">{user.email}</p>
      <p className="user-card__company">{user.company.name}</p>
    </div>
  );
}

export default UserCard; 