
import { Outlet } from 'react-router-dom';
import Navbar from './NavBar';
import Sidebar from './SideBar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-gray-100">
      <Navbar />
      <div className="flex">
        <div className='hidden md:block fixed left-0 z-40'>
          <Sidebar />
        </div>
        <main className="flex-1 p-4 w-full md:ml-96">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;