import  { useState } from 'react';
import { updateProfile } from '../utils/api'; 

const ProfileForm = ({ profile, setProfile }) => {
  const [name, setName] = useState(profile.name || '');
  const [bio, setBio] = useState(profile.bio || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedProfile = await updateProfile({ name, bio });
    setProfile(updatedProfile);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        className="border rounded p-2 w-full"
        required
      />
      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Short Bio"
        className="border rounded p-2 w-full mt-2"
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white rounded p-2 mt-2">Update Profile</button>
    </form>
  );
};

export default ProfileForm;
