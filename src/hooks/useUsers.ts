import { useQuery } from 'react-query';
import { User } from '../types/user';

const fetchUsers = async (): Promise<User[]> => {
  // Return empty array - no pre-existing data
  return Promise.resolve([]);
};

export const useUsers = () => {
  return useQuery<User[], Error>('users', fetchUsers, {
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
};



