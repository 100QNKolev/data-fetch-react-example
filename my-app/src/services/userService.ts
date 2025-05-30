import { User } from '../types/User';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const userService = {
  async getUsers(): Promise<User[]> {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return response.json();
  }
};
