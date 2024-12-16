import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'DMS',
  description: 'Documents management system'
};
export default function Dashboard() {
  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Dashboard information will be added here later.</p>
      </div>
    </div>
  );
}
