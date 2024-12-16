'use client';
import { useEffect } from 'react';
import { AxiosInstance } from '../Auth/Interceptor';

export default function RolesPage() {
  useEffect(() => {
    AxiosInstance.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);
  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Roles Management</h1>
        <p>Role information will be added here later.</p>
      </div>
    </div>
  );
}
