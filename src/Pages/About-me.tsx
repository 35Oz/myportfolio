
import { Calendar, MapPin, Building2, Mail } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: <Building2 size={18} />, text: 'Desarrollador Web Freelance' },
    { icon: <MapPin size={18} />, text: 'Buenos Aires, Argentina' },
    { icon: <Mail size={18} />, text: 'ezediazz.24@gmail.com' },
    { icon: <Calendar size={18} />, text: 'Se unió en Marzo 2022' },
  ];

  const interests = [
    'Desarrollo Web',
    'Base de datos',
    'Diseño UI/UX',
    'Análisis de Datos',

  ];

  const funFacts = [
    '📚 Aprendíz continuo',
    '🎮 Gamer casual',
    '🌍 Amante de los viajes',
    '🎸 Gusto por la música',
    '⚜️ Scout desde los 8 años',
  ];

  return (
    <div className="max-w-4xl space-y-8">
      <h1 className="text-3xl font-bold">Sobre Mí</h1>
      
      <div className="bg-gray-900 rounded-lg border border-gray-700 p-6">

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-4">
            ¡Hola! 👋 Soy un Desarrollador Web y me especializo en React Js con TypeScript.
          </p>
          
          <p className="text-gray-300 mb-6">
          Me enfoco en diseñar soluciones robustas para problemas complejos, 
          manteniendo una mentalidad de aprendizaje continuo y exploración tecnológica.
          </p>
                

          <div className="grid grid-cols-2 gap-4">
            {personalInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-300">
                {info.icon}
                <span>{info.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Intereses</h2>
          <ul className="space-y-2 text-gray-300">
            {interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Datos Curiosos</h2>
          <ul className="space-y-2 text-gray-300">
            {funFacts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;