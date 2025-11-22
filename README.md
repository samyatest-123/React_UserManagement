# React User Management Application

A modern, production-ready React application for managing users with a clean and elegant UI. Built with Vite, TypeScript, TailwindCSS, Zustand, and React Query.

## ✨ Features

- **Fetch & List Users**: Fetches users from JSONPlaceholder API and displays them in a responsive table
- **Create User**: Add new users with form validation (React Hook Form + Zod)
- **Edit User**: Update existing users with prefilled form data
- **Delete User**: Remove users with confirmation dialog
- **Search & Filter**: Real-time search by name or email (case-insensitive)
- **Pagination**: Client-side pagination (10 users per page)
- **State Management**: Zustand for global state management
- **Data Fetching**: React Query for efficient API data fetching
- **Responsive Design**: Modern, clean UI that works on all devices

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Start the development server:**

```bash
npm run dev
```

3. **Open your browser:**

Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── UserTable.tsx      # Table component for displaying users
│   ├── UserForm.tsx        # Form component for create/edit (with validation)
│   ├── Modal.tsx           # Reusable modal component
│   ├── SearchBar.tsx       # Search input component
│   └── Pagination.tsx      # Pagination controls
├── store/
│   └── userStore.ts        # Zustand store for user state
├── pages/
│   └── Home.tsx            # Main page component
├── hooks/
│   └── useUsers.ts         # React Query hook for fetching users
├── types/
│   └── user.ts             # TypeScript type definitions
├── App.tsx                 # Root component with QueryClient
└── main.tsx                # Application entry point
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Zustand** - Lightweight state management
- **React Query** - Data fetching and caching
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## 📝 Usage

### Adding a User

1. Click the "Add User" button in the top-right corner
2. Fill in the form fields (Name, Email, Phone, Company)
3. Click "Create User" to add the user to the table

### Editing a User

1. Click the "Edit" button next to any user in the table
2. Modify the user details in the modal
3. Click "Update User" to save changes

### Deleting a User

1. Click the "Delete" button next to any user
2. Confirm the deletion in the popup dialog

### Searching Users

Type in the search bar to filter users by name or email in real-time.

## 🎨 UI Features

- Clean, modern design
- Responsive layout (works on mobile, tablet, and desktop)
- Loading states with spinner
- Error handling with user-friendly messages
- Smooth transitions and hover effects
- Accessible components with proper ARIA labels

## 🔧 Configuration

### TailwindCSS

TailwindCSS is already configured in `tailwind.config.js`. The configuration includes:

- Content paths for all React components
- Default theme extensions

### TypeScript

TypeScript is configured with strict mode enabled. Configuration is in `tsconfig.json`.

## 📦 Dependencies

### Production Dependencies

- `react` & `react-dom` - React library
- `react-hook-form` - Form handling
- `react-query` - Data fetching
- `zod` - Schema validation
- `@hookform/resolvers` - React Hook Form + Zod integration
- `zustand` - State management

### Development Dependencies

- `@vitejs/plugin-react` - Vite React plugin
- `typescript` - TypeScript compiler
- `tailwindcss` - CSS framework
- `autoprefixer` - CSS vendor prefixing
- `postcss` - CSS processing

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically use the next available port.

### Build Errors

Make sure all dependencies are installed:

```bash
npm install
```

### TypeScript Errors

Ensure you're using Node.js 18+ and all dependencies are up to date.

## 📄 License

This project is open source and available for personal and commercial use.

## 🙏 Acknowledgments

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for the free API
- All the amazing open-source libraries that made this project possible

---

Built with ❤️ using React, TypeScript, and TailwindCSS



