import { create } from 'zustand';
import { User, UserFormData } from '../types/user';

interface UserState {
  users: User[];
  setUsers: (users: User[]) => void;
  addUser: (userData: UserFormData) => void;
  updateUser: (id: number, userData: UserFormData) => void;
  deleteUser: (id: number) => void;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
  addUser: (userData) => {
    const newUser: User = {
      id: Date.now(), // Simple ID generation for new users
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      company: {
        name: userData.company,
      },
    };
    set((state) => ({ users: [...state.users, newUser] }));
  },
  updateUser: (id, userData) => {
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id
          ? {
              ...user,
              name: userData.name,
              email: userData.email,
              phone: userData.phone,
              company: { name: userData.company },
            }
          : user
      ),
    }));
  },
  deleteUser: (id) => {
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    }));
  },
}));




