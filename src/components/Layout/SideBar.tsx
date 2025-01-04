
import { Users2, } from 'lucide-react';
import SocialLinks from '../UI/SocialLinks';
import Stats from '../UI/Stats';
import ProfileInfo from '../UI/ProfileInfo';


const Sidebar = () => {
  const stats = [
    { label: 'Followers', value: '2.5k' },
    { label: 'Following', value: '180' },
    { label: 'Repositories', value: '45' },
  ];

  return (
    <div className="w-80 bg-gray-900 p-6 border-r  border-gray-700 h-screen fixed overflow-y-auto">
      <div className="flex flex-col">
        <div className="text-center mb-6">
          <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-gray-700 mx-auto">
            <img
              src="https://i.postimg.cc/BvgJXH22/Screenshot-2024-11-23-164653.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-100 mt-4">Ezequiel Díaz</h1>
          <p className="text-gray-400">@350z</p>
      </div>

        <Stats stats={stats} />

        <div className="space-y-3 mb-6">
          <ProfileInfo />
          <div className="flex items-center text-gray-300">
            <Users2 size={18} className="mr-2 text-gray-400" />
            <span>Disponible para colaborar</span>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <h2 className="text-gray-100 font-semibold mb-3">Conecta conmigo</h2>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;