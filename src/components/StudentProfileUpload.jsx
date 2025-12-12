import { useState, useRef } from 'react';
import { Camera } from 'lucide-react';

/**
 * Props:
 *  - studentId: unique ID of the student
 *  - currentPic: optional, current profile picture URL
 *  - onUpload: optional, callback after uploading image
 */
function StudentProfileUpload({ studentId, currentPic, onUpload }) {
  const [image, setImage] = useState(currentPic || null);
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Show preview immediately
    setImage(URL.createObjectURL(file));

    // Upload to backend (replace URL with your API)
    const formData = new FormData();
    formData.append('profilePic', file);

    try {
      const res = await fetch(`/api/students/${studentId}/upload`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (onUpload) onUpload(data.profilePicUrl); // callback for parent
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div className="relative w-24 h-24">
      <img
        src={image || 'https://via.placeholder.com/100'}
        alt="Profile"
        className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
      />
      <div
        className="absolute bottom-0 right-0 bg-white rounded-full p-1 cursor-pointer border border-gray-300"
        onClick={() => fileInputRef.current.click()}
      >
        <Camera className="w-5 h-5 text-gray-700" />
      </div>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
        accept="image/*"
      />
    </div>
  );
}

export default StudentProfileUpload;
