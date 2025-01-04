
import { Outlet } from 'react-router-dom';
import Navbar from './NavBar';
import Sidebar from './SideBar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-gray-100">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="ml-64 pl-44 flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;