'use-client';
// Import necessary modules
import { Input } from '@/components/ui/input';
import React from 'react';

interface FileUploaderProps {
  selectedFile: File | null;
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const FileUploader: React.FC<FileUploaderProps> = ({ setSelectedFile }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];

    if (!file) return;

    const allowedTypes = ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];

    if (!allowedTypes.includes(file.type)) {
      e.target.value = ''; // Reset the input
      setSelectedFile(null);
      return;
    }

    setSelectedFile(file);
  };

  return (
    <div>
      <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">
        Upload a File (Only .doc, .docx, and .txt files are allowed.)
      </label>
      <Input id="file-upload" type="file" accept=".doc,.docx,.txt" onChange={handleFileChange} className="mt-2 cursor-pointer" />
    </div>
  );
};

export default FileUploader;
