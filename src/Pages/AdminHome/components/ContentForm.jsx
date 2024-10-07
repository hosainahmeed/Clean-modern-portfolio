// src/components/ContentForm.jsx
import  { useState } from 'react';
import { createContent } from '../utils/api'; // Import API utility

const ContentForm = ({ setContentItems }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newContent = await createContent({ title, body });
    setContentItems((prev) => [...prev, newContent]);
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Content Title"
        className="border rounded p-2 w-full"
        required
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Content Body"
        className="border rounded p-2 w-full mt-2"
        required
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white rounded p-2 mt-2">Add Content</button>
    </form>
  );
};

export default ContentForm;
