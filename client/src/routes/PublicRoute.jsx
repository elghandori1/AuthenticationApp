import { Navigate } from 'react-router-dom';
import useAuth from '../auth/useAuth';

export default function PublicRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-700 text-lg">Loading...</p>
      </div>
    );
  }

  if (user) {
    return <Navigate to="/" />;
  }

  return children;
}