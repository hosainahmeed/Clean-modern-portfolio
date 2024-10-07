


// src/pages/ManageContent.jsx
import  { useState, useEffect } from 'react';
import ContentForm from '../components/ContentForm.jsx';
import { fetchContent } from '../utils/api.js'; // Import API utility

const ManageContent = () => {
  const [contentItems, setContentItems] = useState([]);

  useEffect(() => {
    const loadContent = async () => {
      const data = await fetchContent();
      setContentItems(data);
    };

    loadContent();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Manage Content</h1>
      <ContentForm setContentItems={setContentItems} />
      <ul className="mt-4">
        {contentItems.map((item) => (
          <li key={item.id} className="border-b py-2">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageContent;
