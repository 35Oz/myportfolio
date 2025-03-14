import { Pin, Star, GitFork, Link, Github} from "lucide-react";


const PortFolio: React.FC = () => {
  const projects = [
    {
      name:'SneakerHub',
      description:'Una web de ventas de zapatillas, construido con React Js con TypeScript, tailwind css y three.js para el modelo 3D',
      stars: 52,
      forks: 3,
      language:'TypeScript',
      languageColor: 'bg-blue-500',
      language2:'React Js',
      languageColor2: 'bg-yellow-500',
      language3:'Tailwind',
      languageColor3: 'bg-purple-500',
      language4:'three.js',
      languageColor4: 'bg-black',
      imgDemostration: 'https://i.postimg.cc/zvQG3j1n/sneaker-Hub.png',
      refGithub:'https://github.com/35Oz/sneakerhub.git',
      refToWeb:'https://sneakersshub.netlify.app'
    },
    {
      name:'CriptoWeb',
      description:'Una web estilo wallet virtual, construido con React Js con TypeScript y Python',
      stars: 45,
      forks: 12,
      language:'TypeScript',
      languageColor: 'bg-blue-500',
      language2:'React Js',
      languageColor2: 'bg-yellow-500',
      language3:'Tailwind',
      languageColor3: 'bg-purple-500',
      imgDemostration: 'https://i.postimg.cc/Cx5GGTwh/Screenshot-2024-12-09-173558.png',
      refGithub:'https://github.com/sschmeil2211/Web-Crypto-Project',
      refToWeb:'https://criptoweb.netlify.app'
    },
    {
      name:'F&R',
      description:'Galería de imágenes para promocionar productos de un emprendimiento téxtil, construido con React Js',
      stars: 10,
      forks: 0,
      language:'JavaScript',
      languageColor: 'bg-yellow-500',
      language2:'React Js',
      languageColor2: 'bg-yellow-500',
      imgDemostration: 'https://i.postimg.cc/zBZTYyKv/Screenshot-2024-12-17-213149.png',
      refGithub:'https://github.com/35Oz/fyrCostura.git',
      refToWeb:''
    },
    {
      name:'Portfolio online',
      description:'Demostración de mi recorrido como programador con mi Portfolio online inspirado en Github, construido en React Js con Typescript y Tailwind',
      stars: 83,
      forks: 1,
      language:'TypeScript',
      languageColor: 'bg-blue-500',
      language2:'React Js',
      languageColor2: 'bg-yellow-500',
      language3:'Tailwind',
      languageColor3: 'bg-purple-500',
      imgDemostration: 'https://i.postimg.cc/Y0tSqYPR/Screenshot-2024-12-18-220037.png',
      refGithub:'https://github.com/35Oz/myportfolio.git',
      refToWeb:''
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-100">Portfolio</h1>
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-700 rounded-lg p-6 bg-gray-900 hover:border-gray-500">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Pin size={16} className="text-gray-400" />
                <h3 className="text-xl font-semibold text-blue-400 hover:text-blue-300">
                  {project.name}
                </h3>
              </div>
              <div className="flex items-center space-x-4 text-gray-300">
                <div className="flex items-center space-x-1">
                  <Star size={16} />
                  <span>{project.stars}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <GitFork size={16} />
                  <span>{project.forks}</span>
                </div>
              </div>
            </div>

            <div className="my-4">
              <img src={project.imgDemostration} 
              className="w-full h-auto rounded-lg border border-gray-800" 
              alt={`Preview of ${project.name}`}/>
            </div>

            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${project.languageColor}`}></div>
              <span className="text-sm text-gray-300">{project.language}</span>
              <div className={`w-3 h-3 rounded-full ${project.languageColor2}`}></div>
              <span className="text-sm text-gray-300">{project.language2}</span>
              <div className={`w-3 h-3 rounded-full ${project.languageColor3}`}></div>
              <span className="text-sm text-gray-300">{project.language3}</span>
              <div className={`w-3 h-3 rounded-full ${project.languageColor4}`}></div>
              <span className="text-sm text-gray-300">{project.language4}</span>
              
            </div>
            <div className="flex mt-4 space-x-1">
            <a
                href={project.refGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 cursor-pointer"
              >
                <Github size={25} />
              </a>
              <a
                href={project.refToWeb}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-300 cursor-pointer"
              >
                <Link size={25} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortFolio;