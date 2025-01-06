import { Calendar, MapPin, Building2, Mail, Github, Globe, Coffee, Book, Gamepad, Plane } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: <Building2 size={18} />, text: 'Desarrollador Web Freelance' },
    { icon: <MapPin size={18} />, text: 'Buenos Aires, Arg' },
    { icon: <Mail size={18} />, text: 'ezediazz.24@gmail.com' },
    { icon: <Calendar size={18} />, text: 'Se unió en Marzo 2022' },
  ];

  const skills = [
    'React Js', 'TypeScript', 'Node.js', 'Python', 'Tailwind', 'JavaScript'
  ];

  const interests = [
    { icon: <Globe size={20} />, text: 'Desarrollo Web' },
    { icon: <Github size={20} />, text: 'Código Abierto' },
    { icon: <Coffee size={20} />, text: 'Café' },
    { icon: <Book size={20} />, text: 'Aprendizaje Continuo' },
    { icon: <Gamepad size={20} />, text: 'Gaming' },
    { icon: <Plane size={20} />, text: 'Viajes' },
  ];

  return (
    <div className="max-w-4xl space-y-8">
      <div className="bg-gray-900 rounded-xl p-8 shadow-xl">
        <h1 className="text-4xl font-bold mb-4">¡Hola! 👋</h1>
        <p className="text-xl text-gray-100">
        Soy un Desarrollador Web y me especializo en React Js con TypeScript.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-900 rounded-xl border border-gray-700 p-6 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-gray-100">Sobre Mí</h2>
          <div className="prose prose-invert">
            <p className="text-gray-300">
            Me enfoco en diseñar soluciones robustas para problemas complejos, 
            manteniendo una mentalidad de aprendizaje continuo y exploración tecnológica.
            </p>
          </div>
          <div className="mt-6 space-y-3">
            {personalInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-3 text-gray-300">
                {info.icon}
                <span>{info.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl border border-gray-700 p-6 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-gray-100">Tecnologías y lenguajes favoritos</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-100">Intereses</h3>
          <div className="grid grid-cols-2 gap-4">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-gray-300 bg-gray-800 p-3 rounded-lg"
              >
                {interest.icon}
                <span>{interest.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl border border-gray-700 p-6 shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-100">Experiencia Destacada</h2>
        <div className="space-y-6">
          <div className="relative pl-8 border-l-2 border-gray-700">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
            <h3 className="text-lg font-semibold text-gray-100">Desarrollador Frontend - F&R</h3>
            <p className="text-gray-300 mt-2">
              Desarrollo desde cero de página web para emprendimiento textil, para unicamente vista para 
              clientes desde el celular.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;






