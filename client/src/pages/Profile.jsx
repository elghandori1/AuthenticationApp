import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../api/axiosClient';
import useAuth from '../auth/useAuth';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await axiosClient.get('/user/profile');
        setProfile(response.data.userprofile);
      } catch (error) {
        setError(error.response?.data?.message || 'Failed to load profile');
      }
    };
    if (user) fetchProfile();
  }, [user, loading, navigate]);

  if (loading || !user) return null;

  return (
    <div className="container mx-auto mt-8 p-4 max-w-md">
      <h1 className="text-2xl font-bold text-center mb-4">Your Profile</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {profile ? (
        <div className="bg-white p-6 rounded shadow-md">
          <p><strong>Name:</strong> {profile.name}</p>
          <p className="mt-2"><strong>Email:</strong> {profile.email}</p>
        </div>
      ) : (
        <p className="text-center">Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;