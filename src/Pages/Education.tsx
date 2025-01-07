import { Calendar, GraduationCap, MapPin } from "lucide-react";

const Education: React.FC = () => {

  const education = [
    {
      degree: "Licenciatura en Sistemas",
      school: "Universidad Nacional de General Sarmiento",
      period: "2021 - actualidad",
      location: "Malvinas Argentinas, Bs As",
      achievements:[
        "Adquisición de conocimientos en lenguajes como [mencionar lenguajes específicos: Java, Python, C++]",
        "Dominio de conceptos fundamentales en bases de datos relacionales y diseño de esquemas eficientes.",
        "Redacción efectiva de documentación técnica."
      ],
    },
    {
      degree: "Bachiller en Humanidades",
      school: "Instituto Cristo Rey",
      period: "2011 - 2017",
      location: "José C. Paz, Bs As",
      achievements:[
        "Habilidad para analizar y estructurar argumentos lógicos.",
        "Capacidad de colaborar en equipos diversos, promoviendo el entendimiento mutuo y la resolución de conflictos.",
        "Redacción efectiva de documentación técnica."
      ],
    },
    
  ];

  const courses = [
    {
      degree: "React Js",
      school: "CoderHouse",
      period: "2023",
      achievements:[
        "Adquisición de conocimientos en Javascript y Typescript",
        "Dominio de conceptos fundamentales en bases de datos relacionales y diseño de esquemas eficientes.",
        "Redacción efectiva de documentación técnica."
      ],
    },
    {
      degree: "Desarrollador Web Full Stack",
      school: "Argentina Programa",
      period: "2022 - 2023",
      achievements:[
        "Habilidad para analizar y estructurar argumentos lógicos.",
        "Capacidad de colaborar en equipos diversos, promoviendo el entendimiento mutuo y la resolución de conflictos.",
        "Redacción efectiva de documentación técnica."
      ],
    },
    
  ];

  return (
    <div className="max-w-4xl ">
      <h1 className="text-3xl font-bold mb-8">Educación</h1>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="border border-gray-700 rounded-lg  p-6 bg-gray-900">
            <div className="flex items-start justify-between mb-4">
              <div >
                <div className="flex items-center space-x-2">
                  <GraduationCap size={24} className="text-blue-600" />
                  <h2 className="text-xl font-bold">{edu.degree}</h2>
                </div>
                <h3 className="text-lg mt-1">{edu.school}</h3>
              </div>
              {/*PC view */}
              <div className="text-right hidden md:block">
                <div className="flex items-center space-x-2 ">
                  <Calendar size={16} />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <MapPin size={16} />
                  <span>{edu.location}</span>
                </div>
              </div>

            </div>
            {/*Mobile view*/}
            <div className="md:hidden flex mb-2">
                <div className="flex items-center space-x-2 ">
                  <Calendar size={16} />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center space-x-2 ml-5">
                  <MapPin size={16} />
                  <span>{edu.location}</span>
                </div>
              </div>

            <div>
              <h4 className="font-semibold mb-2">Logros:</h4>
              <ul className="list-disc list-inside space-y-1">
                {edu.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-3xl font-bold mb-8 mt-9">Cursos</h1>

      <div className="space-y-8">
        {courses.map((cour, index) => (
          <div key={index} className="border border-gray-700 rounded-lg p-6 bg-gray-900">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <GraduationCap size={24} className="text-blue-600" />
                  <h2 className="text-xl font-bold">{cour.degree}</h2>
                </div>
                <h3 className="text-lg mt-1">{cour.school}</h3>
              </div>
              {/*PC view */}
              <div className="hidden md:block  md:hiddentext-right">
                <div className="flex items-center space-x-2 ">
                  <Calendar size={16} />
                  <span>{cour.period}</span>
                </div>
              </div>
            </div>
            {/*Mobile view*/}
            <div className="md:hidden text-right">
                <div className="flex items-center space-x-2 mb-3">
                  <Calendar size={16} />
                  <span>{cour.period}</span>
                </div>
              </div>

            <div>
              <h4 className="font-semibold mb-2">Logros:</h4>
              <ul className="list-disc list-inside space-y-1">
                {cour.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>



    </div>
  );
};

export default Education;