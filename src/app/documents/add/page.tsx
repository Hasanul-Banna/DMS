'use client';

import FileUploader from '@/app/components/FileUploader';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AddDocumentPage() {
  const [title, setTitle] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(selectedFile);
    if (selectedFile) {
      router.push('/documents');
    }
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Document</h1>
      <Card className="p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-2" />
          </div>
          <FileUploader selectedFile={selectedFile} setSelectedFile={setSelectedFile}></FileUploader>
          <Button type="submit">Upload Document</Button>
        </form>
      </Card>
    </div>
  );
}
