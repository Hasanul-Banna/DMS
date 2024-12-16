'use client';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useState } from 'react';

export default function LogsPage() {
  const [logs] = useState([
    { id: 1, timestamp: '2023-06-01 10:00:00', status: 200, type: 'API Request', message: 'GET /api/documents' },
    { id: 2, timestamp: '2023-06-01 10:00:01', status: 200, type: 'API Response', message: 'Status 200 OK' },
    { id: 3, timestamp: '2023-06-01 10:05:00', status: 502, type: 'API Request', message: 'POST /api/documents' },
    { id: 4, timestamp: '2023-06-01 10:05:01', status: 502, type: 'API Response', message: 'Status 201 Created' }
  ]);

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">API Logs</h1>
        <Card>
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-500 hover:bg-slate-500">
                <TableHead className="text-white">Timestamp</TableHead>
                <TableHead className="text-white">Type</TableHead>
                <TableHead className="text-white">Status</TableHead>
                <TableHead className="text-white">Message</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>{log.timestamp}</TableCell>
                  <TableCell>{log.type}</TableCell>
                  <TableCell>
                    <Badge>{log.status}</Badge>
                  </TableCell>
                  <TableCell>{log.message}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}
