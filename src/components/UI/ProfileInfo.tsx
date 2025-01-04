
import { MapPin, Building2 } from 'lucide-react';

const ProfileInfo = () => {
  return (
    <div className="w-full space-y-2">
      <div className="flex items-center text-gray-300">
        <Building2 size={18} className="mr-2" />
        <span>Desarrollador Web</span>
      </div>
      <div className="flex items-center text-gray-300">
        <MapPin size={18} className="mr-2" />
        <span>Buenos Aires, Argentina</span>
      </div>
    </div>
  );
};

export default ProfileInfo;