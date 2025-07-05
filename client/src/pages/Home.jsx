import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../auth/useAuth';

const Home = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  if (loading || !user) return null;

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Welcome, {user.name}!</h1>
      <p className="text-center text-gray-700">
        This is your homepage. You can view your profile or log out from the navigation bar.
      </p>

    </div>
  );
};

export default Home;