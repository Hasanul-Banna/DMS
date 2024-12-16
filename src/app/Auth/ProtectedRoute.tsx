// components/ProtectedRoute.tsx
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isAuthenticated = checkAuth(); // Replace with your authentication logic

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login'); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; // Optionally, show a loading state
  }

  return <>{children}</>;
}

// Mock authentication check
function checkAuth() {
  return true
  return !!localStorage.getItem('authToken'); // Replace with real logic
}
