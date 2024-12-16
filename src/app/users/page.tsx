'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useState } from 'react';
import UserFormDialog from './AddUser';

export default function UsersPage() {
  const [users, setUsers] = useState([
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
    { id: 3, name: 'User 3', email: 'user3@example.com' }
  ]);
  // const [newUserName, setNewUserName] = useState('');
  // const [newUserEmail, setNewUserEmail] = useState('');

  // const addUser = () => {
  //   if (newUserName && newUserEmail) {
  //     setUsers([...users, { id: Date.now(), name: newUserName, email: newUserEmail }]);
  //     setNewUserName('');
  //     setNewUserEmail('');
  //   }
  // };

  const removeUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="mb-4 flex justify-between space-x-2">
          <h1 className="text-2xl font-bold mb-4">User Management</h1>

          {/* <Button onClick={addUser}>Add User</Button> */}
          <UserFormDialog />
        </div>
        <Card>
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-500 hover:bg-slate-500">
                <TableHead className="text-white">Name</TableHead>
                <TableHead className="text-white">Email</TableHead>
                <TableHead className="text-white">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Button size={'sm'} variant="outline" className="mr-2">
                      Edit
                    </Button>
                    <Button size={'sm'} variant="destructive" onClick={() => removeUser(user.id)}>
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
        <Button className="mt-4">Sync with Microsoft AD</Button>
      </div>
    </div>
  );
}
