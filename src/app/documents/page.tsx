'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Link from 'next/link';
import { useState } from 'react';

export default function DocumentsPage() {
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Microsoft word document 1', status: 'new' },
    { id: 2, name: 'Microsoft word document 2', status: 'pending' },
    { id: 3, name: 'Microsoft word document 3', status: 'sent' }
  ]);

  const removeDocument = (id: number) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
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
                <TableRow key={doc.id}>
                  <TableCell className="text-center">{doc.name}</TableCell>
                  {/* <TableCell>{doc.status}</TableCell> */}
                  <TableCell className="text-center">
                    <Button variant="outline" className="mr-2" size={'sm'}>
                      Edit
                    </Button>
                    <Button variant="outline" className="mr-2" size={'sm'}>
                      Preview
                    </Button>
                    <Button variant="outline" className="mr-2" size={'sm'}>
                      Download
                    </Button>
                    <Button variant="destructive" size={'sm'} onClick={() => removeDocument(doc.id)}>
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
