import { useEffect, useState } from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import ProgressBar from './ProgressBar';
export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarHidden, setSidebar] = useState<boolean>(false);
  const [uiLoader, setUiLoader] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setUiLoader(false);
    }, 3000);
  }, []);
  return (
    <>
      <div className="flex">
        <div className={`${isSidebarHidden ? 'w-0' : 'w-72'}  bg-sky-950  h-screen  transition-all duration-300`}>
          <Sidebar />
        </div>
        <div className="w-full bg-slate-100 h-screen  transition-all duration-300">
          <Navigation setSidebar={setSidebar} />
          {uiLoader && <ProgressBar />}
          {children}
        </div>
      </div>
    </>
  );
}
