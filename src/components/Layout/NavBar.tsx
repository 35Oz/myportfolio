import { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, User, FolderGit2, GraduationCap} from 'lucide-react';

const navItems = [
  { to: '/', icon: <User size={20} />, text: 'Sobre Mí' },
  { to: '/portfolio', icon: <FolderGit2 size={20} />, text: 'Portafolio' },
  { to: '/education', icon: <GraduationCap size={20} />, text: 'Educación' },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const routeTitles: { [key:string]: string} = {
    '/': 'Sobre Mí',
    '/portfolio': 'Portafolio',
    '/education': 'Educación',
  }

  const currenTitle = routeTitles[location.pathname] || 'Sobre Mí';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-gray-900 text-gray-100 px-4 py-3 sticky top-0 border-b border-gray-700 z-50">
      <div className=" mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="p-2 hover:bg-gray-800 rounded-md transition-colors"
                aria-label="Toggle Menu"
              >
                {isDropdownOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gray-900 ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    {navItems.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        onClick={() => setIsDropdownOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center space-x-3 px-4 py-2 text-sm ${
                            isActive
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                          }`
                        }
                      >
                        {item.icon}
                        <span>{item.text}</span>
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <span className='text-xl font-semibold'>{currenTitle}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;