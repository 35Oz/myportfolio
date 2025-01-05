
import { NavLink } from 'react-router-dom';
import { Home, User, FolderGit2, GraduationCap, Code2,} from 'lucide-react';

export const navItems = [
  { to: '/', icon: <Home size={20} />, text: 'Inicio' },
  { to: '/about', icon: <User size={20} />, text: 'Sobre Mí' },
  { to: '/portfolio', icon: <FolderGit2 size={20} />, text: 'Portafolio' },
  { to: '/education', icon: <GraduationCap size={20} />, text: 'Educación' },
];

const NavLinks = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors ${
              isActive ? 'text-white bg-gray-800' : 'text-gray-400'
            }`
          }
        >
          <span className="hidden md:block">{item.icon}</span>
          <span className="text-sm md:text-base">{item.text}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;