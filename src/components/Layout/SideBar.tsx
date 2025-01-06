
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
    <div className="w-80 bg-gray-900 p-6 border-r  border-gray-700 overflow-y-auto">
      <div className="flex flex-col">
        <div className="text-center mb-6">
          <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-gray-700 mx-auto">
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

         {/* SKILLS */}

        <div className="space-y-2">
        
        {/* tratar de mejorar usando const y jsons para el llamado
        de datos para llamar pocas veces en el html lo mismo*/}

          <div className="rounded-lg bg-gray-900 w-fit mb-4" >
            <div className="flex ">
           
                <div className="items-center space-x-2 ">

                  <h2 className="font-bold text-xs text-gray-200 ">LENGUAJES DE PROGRAMACIÓN</h2>

                  <div className="flex flex-wrap gap-4 py-4">
          
                    <div className="flex items-center justify-start text-white shadow-md">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" 
                        alt="Java Logo" 
                        className="w-8 h-8"
                      />
                    </div>

                  
                    <div className="flex items-center justify-start text-white shadow-md">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" 
                        alt="TypeScript Logo" 
                        className="w-8 h-8 "
                      />
                    </div>

                    <div className="flex items-center justify-start text-white shadow-md">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" 
                        alt="TypeScript Logo" 
                        className="w-8 h-8 "
                      />
                    </div>

              
                    <div className="flex items-center justify-start text-white shadow-md">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" 
                        alt="Python Logo" 
                        className="w-8 h-8 "
                      />
                    </div>

                  </div>

                </div>
            </div>

          </div>
          

          <div className="rounded-lg bg-gray-900 w-fit" >
            <div className="flex items-start justify-between">
           
                <div className="items-center space-x-2 ">

                  <h2 className="font-bold text-xs text-gray-200">FRAMEWORKS Y LIBRERÍAS</h2>

                  <div className="flex flex-wrap gap-3 py-4">
          
                    <div className="flex items-center justify-start">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                        alt="Java Logo" 
                        className="w-8 h-8 ml-1"
                      />
                     
                    </div>

                  
                    <div className="flex items-center justify-start ">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" 
                        alt="TypeScript Logo" 
                        className="w-8 h-8 ml-2"
                      />
                      
                    </div>

              
                    <div className="flex items-center justify-start ">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg" 
                        alt="Python Logo" 
                        className="w-9 h-9 ml-2"
                      />
                    </div>

                  </div>
                </div>
            </div>
          </div>

          <div className="rounded-lg bg-gray-900 w-fit" >
            <div className="flex items-start justify-between mb-2">
           
                <div className="items-center space-x-2 ">

                  <h2 className="font-bold text-xs text-gray-200 ">SOFTWARE Y HERRAMIENTAS</h2>

                  <div className="flex flex-wrap gap-4 py-4">
          
                    <div className="flex items-center justify-start">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" 
                        alt="Java Logo" 
                        className="w-8 h-8 ml-1"
                      />
                    </div>

                  
                    <div className="flex items-center justify-start ">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" 
                        alt="TypeScript Logo" 
                        className="w-8 h-8 "
                      />
                    </div>
                    
                  </div>
                </div>
            </div>
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