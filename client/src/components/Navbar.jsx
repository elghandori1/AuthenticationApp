import { Link } from 'react-router-dom';
import useAuth from '../auth/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">MyAuthApp</Link>
        <div className="space-x-4">
          {user && (
            <>
              <Link to="/profile" className="text-white hover:text-gray-200">Profile</Link>
              <button
                onClick={logout}
                className="text-white hover:text-gray-200"
              >
                Logout
              </button>
            </>
          ) }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;