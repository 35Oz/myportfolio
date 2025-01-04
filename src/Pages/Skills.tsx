const Skills: React.FC = () => {

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">SKILLS</h1>
      <div className="space-y-8">
        
        {/* tratar de mejorar usando const y jsons para el llamado
        de datos para llamar pocas veces en el html lo mismo*/}

          <div className="border border-gray-700 rounded-lg  p-6 bg-gray-900 w-fit" >
            <div className="flex items-start justify-between mb-4 ">
           
                <div className="items-center space-x-2 ">

                  <h2 className="mb-2 text-2xl">LENGUAJES DE PROGRAMACIÓN</h2>

                  <div className="flex flex-wrap gap-4 p-4">
          
                    <div className="flex items-center justify-start bg-gray-800 text-white w-32 h-14 shadow-md">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" 
                        alt="Java Logo" 
                        className="w-11 h-11 ml-2"
                      />
                      <span className="px-2 mr-3 text-lg font-semibold">JAVA</span>
                    </div>

                  
                    <div className="flex items-center justify-start bg-blue-800 text-white w-48 h-14 shadow-md">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" 
                        alt="TypeScript Logo" 
                        className="w-8 h-8 ml-6"
                      />
                      <span className="px-3 text-lg font-semibold">TYPESCRIPT</span>
                    </div>

                    <div className="flex items-center justify-start bg-gray-800 text-white w-48 h-14 shadow-md">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" 
                        alt="TypeScript Logo" 
                        className="w-8 h-8 ml-6"
                      />
                      <span className="px-3 text-lg font-semibold">JAVASCRIPT</span>
                    </div>

              
                    <div className="flex items-center justify-start bg-[#306998] text-white w-40 h-14 shadow-md">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" 
                        alt="Python Logo" 
                        className="w-9 h-9 ml-4"
                      />
                      <span className="px-3 text-lg font-semibold">PYTHON</span>
                    </div>

                  </div>

                </div>
            </div>

          </div>
          

          <div className="border border-gray-700 rounded-lg  p-6 bg-gray-900 w-fit" >
            <div className="flex items-start justify-between mb-4 ">
           
                <div className="items-center space-x-2 ">

                  <h2 className="mb-2 text-2xl">FRAMEWORKS Y LIBRERÍAS</h2>

                  <div className="flex flex-wrap gap-4 p-4">
          
                    <div className="flex items-center justify-start bg-gray-800 text-white w-44 h-14 shadow-md">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                        alt="Java Logo" 
                        className="w-11 h-11 ml-4"
                      />
                      <span className="px-2 mr-3 text-lg font-semibold">REACT JS</span>
                    </div>

                  
                    <div className="flex items-center justify-start bg-blue-800 text-white w-52 h-14 shadow-md">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" 
                        alt="TypeScript Logo" 
                        className="w-8 h-8 ml-6"
                      />
                      <span className="px-3 text-lg font-semibold">TAILWIND CSS</span>
                    </div>

              
                    <div className="flex items-center justify-start bg-[#306998] bg-gray-200 text-black w-40 h-14 shadow-md">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg" 
                        alt="Python Logo" 
                        className="w-12 h-12 ml-4"
                      />
                      <span className="px-3 text-lg font-semibold">MYSQL</span>
                    </div>

                  </div>
                </div>
            </div>
          </div>

          <div className="border border-gray-700 rounded-lg  p-6 bg-gray-900 w-fit" >
            <div className="flex items-start justify-between mb-4 ">
           
                <div className="items-center space-x-2 ">

                  <h2 className="mb-2 text-2xl">SOFTWARE Y HERRAMIENTAS</h2>

                  <div className="flex flex-wrap gap-4 p-4">
          
                    <div className="flex items-center justify-start bg-gray-800 text-white w-76 h-14 shadow-md">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" 
                        alt="Java Logo" 
                        className="w-9 h-9 ml-4"
                      />
                      <span className="px-2 mr-3 text-lg font-semibold">ADOBE PHOTOSHOP</span>
                    </div>

                  
                    <div className="flex items-center justify-start bg-blue-800 text-white w-auto h-14 shadow-md">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" 
                        alt="TypeScript Logo" 
                        className="w-8 h-8 ml-6"
                      />
                      <span className="px-3 text-lg font-semibold">VISUAL STUDIO CODE</span>
                    </div>
                    
                  </div>
                </div>
            </div>
          </div>

      
       
      </div>
    </div>
  );
};

export default Skills;