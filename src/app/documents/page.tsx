'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AxiosInstance } from '../Auth/Interceptor';
interface FileObj {
  _id: string;
  name: string;
  file_path: string;
}
export default function DocumentsPage() {
  const [documents, setDocuments] = useState<FileObj[]>([]);
  useEffect(() => {
    AxiosInstance.get('http://localhost:5000/api/docs')
      .then((response) => {
        console.log(response.data.data);
        setDocuments(response.data.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);
  const removeDocument = (id: string) => {
    AxiosInstance.delete('http://localhost:5000/api/docs/delete', { data: { id } })
      .then((response) => {
        console.log('Document deleted successfully:', response.data);
        setDocuments(documents.filter((doc) => doc._id !== id));
      })
      .catch((error) => {
        if (error.response) {
          console.error('Error:', error.response.data.error || error.response.data.msg);
        } else {
          console.error('Error:', error.message);
        }
      });
  };
  const downloadDocx = async (filename: string, fileUrl: string) => {
    try {
      // Fetch the file content as a blob
      const response = await fetch(fileUrl);
      if (!response.ok) throw new Error('File download failed');

      const blob = await response.blob();

      // Create an object URL for the blob
      const url = window.URL.createObjectURL(new Blob([blob]));

      // Create a link element
      const link = document.createElement('a');
      link.href = url;
      // Extract the file extension from the URL
      const urlParts = fileUrl.split('.');
      const fileExtension = urlParts[urlParts.length - 1]; // Get last part after dot (e.g., "docx")
      // Combine desired file name with the original extension
      const finalFileName = `${filename}.${fileExtension}`;

      // Set the desired file name
      link.setAttribute('download', finalFileName);

      // Append to the document and trigger the download
      document.body.appendChild(link);
      link.click();

      // Cleanup: Remove the link and revoke the URL
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };
  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="flex  justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Document List</h1>
          <Link href="/documents/add" passHref>
            <Button>Upload New Document</Button>
          </Link>
        </div>
        <Card>
          <Table className="table-auto w-full">
            <TableHeader className="">
              <TableRow className="bg-slate-500 hover:bg-slate-500">
                <TableHead className="text-white text-center w-1/2 font-bold">Name</TableHead>
                <TableHead className="text-white text-center w-1/2 font-bold">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="">
              {documents.map((doc) => (
                <TableRow key={doc._id}>
                  <TableCell className="text-center">{doc.name}</TableCell>
                  {/* <TableCell>{doc.status}</TableCell> */}
                  <TableCell className="text-center">
                    <Button variant="outline" className="mr-2" size={'sm'}>
                      Edit
                    </Button>
                    <Button variant="outline" className="mr-2" size={'sm'}>
                      Preview
                    </Button>
                    <Button
                      variant="outline"
                      className="mr-2"
                      size={'sm'}
                      onClick={() => downloadDocx(doc.name, `http://localhost:5000/${doc.file_path}`)}
                    >
                      Download
                    </Button>
                    <Button variant="destructive" size={'sm'} onClick={() => removeDocument(doc._id)}>
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}
