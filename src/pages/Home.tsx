import { useState, useMemo, useEffect } from 'react';
import { useUsers } from '../hooks/useUsers';
import { useUserStore } from '../store/userStore';
import { User, UserFormData } from '../types/user';
import { UserTable } from '../components/UserTable';
import { UserForm } from '../components/UserForm';
import { Modal } from '../components/Modal';
import { SearchBar } from '../components/SearchBar';
import { Pagination } from '../components/Pagination';

const USERS_PER_PAGE = 10;

export const Home = () => {
  const { data: fetchedUsers, isLoading, isError, error } = useUsers();
  const { users, setUsers, addUser, updateUser, deleteUser } = useUserStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | undefined>(undefined);
  const [deleteConfirmId, setDeleteConfirmId] = useState<number | null>(null);

  // No pre-existing data - removed sync effect

  // Filter users based on search query
  const filteredUsers = useMemo(() => {
    if (!searchQuery.trim()) return users;

    const query = searchQuery.toLowerCase();
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );
  }, [users, searchQuery]);

  // Paginate filtered users
  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * USERS_PER_PAGE;
    const endIndex = startIndex + USERS_PER_PAGE;
    return filteredUsers.slice(startIndex, endIndex);
  }, [filteredUsers, currentPage]);

  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);

  // Reset to page 1 when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const handleAddUser = () => {
    setEditingUser(undefined);
    setIsModalOpen(true);
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleDeleteUser = (id: number) => {
    setDeleteConfirmId(id);
  };

  const confirmDelete = () => {
    if (deleteConfirmId !== null) {
      deleteUser(deleteConfirmId);
      setDeleteConfirmId(null);
      // Reset to page 1 if current page becomes empty
      if (paginatedUsers.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  const handleFormSubmit = (data: UserFormData) => {
    if (editingUser) {
      updateUser(editingUser.id, data);
    } else {
      addUser(data);
    }
    setIsModalOpen(false);
    setEditingUser(undefined);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingUser(undefined);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-600">Loading users...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-2">Error loading users</div>
          <p className="text-gray-600">
            {error?.message || 'Something went wrong'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
          <button
            onClick={handleAddUser}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium shadow-sm"
          >
            Add User
          </button>
        </div>

        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        <UserTable
          users={paginatedUsers}
          onEdit={handleEditUser}
          onDelete={handleDeleteUser}
        />

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}

        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          title={editingUser ? 'Edit User' : 'Create User'}
        >
          <UserForm
            user={editingUser}
            onSubmit={handleFormSubmit}
            onCancel={handleModalClose}
          />
        </Modal>

        {/* Delete Confirmation Modal */}
        {deleteConfirmId !== null && (
          <Modal
            isOpen={true}
            onClose={() => setDeleteConfirmId(null)}
            title="Confirm Delete"
          >
            <div className="space-y-4">
              <p className="text-gray-700">
                Are you sure you want to delete this user? This action cannot be
                undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={confirmDelete}
                  className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors font-medium"
                >
                  Delete
                </button>
                <button
                  onClick={() => setDeleteConfirmId(null)}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

