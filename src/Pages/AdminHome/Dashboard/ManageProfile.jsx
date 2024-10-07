import  { useState, useEffect } from 'react';
import ProfileForm from '../components/ProfileForm.jsx';
import { fetchProfile } from '../utils/api.js'; // Import API utility

const ManageProfile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const loadProfile = async () => {
      const data = await fetchProfile();
      setProfile(data);
    };

    loadProfile();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Manage Profile</h1>
      <ProfileForm profile={profile} setProfile={setProfile} />
    </div>
  );
};

export default ManageProfile;
