'use client';

import { AxiosInstance } from '@/app/Auth/Interceptor';
import FileUploader from '@/app/components/FileUploader';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AddDocumentPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const uploadDocument = async (name, description, file) => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('file', file); // Attach the file

      // POST Request
      const response = await AxiosInstance.post('http://localhost:5000/api/docs/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      console.log('Document uploaded successfully:', response.data);
      router.push('/documents');
      // return response.data;
    } catch (error) {
      if (error.response) {
        console.error('Error:', error.response.data.error || error.response.data.msg);
      } else {
        console.error('Error:', error.message);
      }
      throw error;
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(selectedFile);
    if (selectedFile) {
      uploadDocument(title, '', selectedFile);
    }
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Document</h1>
      <Card className="p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-2" required />
          </div>
          <FileUploader selectedFile={selectedFile} setSelectedFile={setSelectedFile}></FileUploader>
          <Button type="submit" disabled={!selectedFile}>
            Upload Document
          </Button>
        </form>
      </Card>
    </div>
  );
}
