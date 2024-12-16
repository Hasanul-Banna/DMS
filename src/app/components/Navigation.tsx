import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { logout } from '../Auth/auth';

const Navigation = ({ setSidebar }: { setSidebar: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <nav className="bg-[#00283a] text-white p-4 flex justify-between">
      <button
        className="btn btn-ghost btn-circle"
        onClick={() => {
          setSidebar((isSidebarHidden: boolean) => !isSidebarHidden);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </button>
      <ul className="flex space-x-4">
        {/* <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/documents">Documents</Link>
        </li>
        <li>
          <Link href="/documents/add">Add Document</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <Link href="/roles">Roles</Link>
        </li>
        <li>
          <Link href="/settings">Settings</Link>
        </li>
        <li>
          <Link href="/logs">Logs</Link>
        </li> */}
        <li>
          <button className="bg-transparent hover:bg-slate-600 pb-1 text-white font-semibold py-0 px-4 rounded">
            <Link href="/login" className="flex gap-2 justify-center items-center" onClick={logout}>
              <LogOut size={15} />
              <span>Logout</span>
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
