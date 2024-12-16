'use client';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import AppLayout from './components/AppLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get the current route
  const noLayoutRoutes = ['/login'];

  const isNoLayout = noLayoutRoutes.includes(pathname);
  return (
    <html lang="en">
      <body>
        {isNoLayout ? (
          <>{children}</>
        ) : (
          <Fragment>
            <AppLayout>{children}</AppLayout>
          </Fragment>
        )}
        <ToastContainer  />
      </body>
    </html>
  );
}
