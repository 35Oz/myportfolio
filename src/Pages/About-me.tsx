import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import {
  Calendar,
  MapPin,
  Building2,
  Mail,
  TentTree,
  Figma,
  Coffee,
  Guitar,
  Gamepad,
  Plane,
} from 'lucide-react';

interface Section {
  id: string;
  type: string;
  content: React.ReactNode | null;
}

interface AboutSkillsSection {
  id: string;
  type: 'about' | 'skills';
  content: React.ReactNode;
}

function App() {
  const personalInfo = [
    { icon: <Building2 size={18} />, text: 'Desarrollador Web Freelance' },
    { icon: <MapPin size={18} />, text: 'Buenos Aires, Arg' },
    { icon: <Mail size={18} />, text: 'ezediazz.24@gmail.com' },
    { icon: <Calendar size={18} />, text: 'Se unió en Marzo 2022' },
  ];

  const skills = [
    'React Js',
    'TypeScript',
    'Node.js',
    'Python',
    'Tailwind',
    'JavaScript',
  ];

  const interests = [
    { icon: <TentTree size={20} />, text: 'Scout' },
    { icon: <Coffee size={20} />, text: 'Café' },
    { icon: <Figma size={20} />, text: 'Diseño' },
    { icon: <Guitar  size={20} />, text: 'Guitarra' },
    { icon: <Gamepad size={20} />, text: 'Juegos' },
    { icon: <Plane size={20} />, text: 'Viajes' },
  ];

  const stats = [
    { label: 'Seguidores', value: '2.5k' },
    { label: 'Seguidos', value: '180' },
    { label: 'Repositorios', value: '4' },
  ];

  const [sections, setSections] = useState<Section[]>([
    {
      id: 'greeting',
      type: 'greeting',
      content: (
        <div className="bg-gray-900 rounded-xl border border-gray-700 p-8 shadow-xl">
          <h1 className="text-4xl font-bold mb-4 text-gray-100">¡Hola! 👋</h1>
          <p className="text-xl text-gray-100">
            Soy un Desarrollador Web y me especializo en React Js con TypeScript.
          </p>
        </div>
      ),
    },
    {
      id: 'about-skills',
      type: 'about-skills',
      content: null,
    },
    {
      id: 'experience',
      type: 'experience',
      content: null,
    },
  ]);

  const [aboutSkillsSections, setAboutSkillsSections] = useState<AboutSkillsSection[]>([
    {
      id: 'about',
      type: 'about',
      content: (
        <div className="bg-gray-900 rounded-xl border border-gray-700 p-6 shadow-xl h-full">
          <h2 className="text-2xl font-bold mb-6 text-gray-100">Sobre Mí</h2>
          <div className="prose prose-invert">
            <p className="text-gray-300">
              Me enfoco en diseñar soluciones robustas para problemas complejos,
              manteniendo una mentalidad de aprendizaje continuo y exploración
              tecnológica.
            </p>
          </div>
          <div className="mt-6 space-y-3">
            {personalInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 text-gray-300"
              >
                {info.icon}
                <span>{info.text}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'skills',
      type: 'skills',
      content: (
        <div className="bg-gray-900 rounded-xl border border-gray-700 p-6 shadow-xl h-full">
          <h2 className="text-2xl font-bold mb-6 text-gray-100">
            Tecnologías y lenguajes favoritos
          </h2>
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
          <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-100">
            Intereses
          </h3>
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
      ),
    },
  ]);

  const reorder = (list: any[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const { source, destination } = result;

    // Handle main sections drag
    if (source.droppableId === 'main-sections') {
      const reorderedSections = reorder(
        sections,
        source.index,
        destination.index
      );
      setSections(reorderedSections);
    }
    
    // Handle about-skills sections drag
    if (source.droppableId === 'about-skills-sections' && destination.droppableId === 'about-skills-sections') {
      const reorderedAboutSkills = reorder(
        aboutSkillsSections,
        source.index,
        destination.index
      );
      setAboutSkillsSections(reorderedAboutSkills);
    }
  };

  const renderSection = (section: Section) => {
    switch (section.type) {
      case 'greeting':
        return section.content;
      case 'about-skills':
        return (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="about-skills-sections" direction="horizontal">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="grid md:grid-cols-2 gap-8"
                >
                  {aboutSkillsSections.map((subSection, index) => (
                    <Draggable
                      key={subSection.id}
                      draggableId={subSection.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="cursor-move h-full group relative"
                        >
                          
                          {subSection.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        );
      case 'experience':
        return (
          <div className="bg-gray-900 rounded-xl border border-gray-700 p-6 shadow-xl ">
            <h2 className="text-2xl font-bold mb-6 text-gray-100">
              Experiencia Destacada
            </h2>
            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-gray-700">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
                <h3 className="text-lg font-semibold text-gray-100">
                  Desarrollador Frontend - F&R
                </h3>
                <p className="text-gray-300 mt-2">
                  Desarrollo desde cero de página web para emprendimiento textil,
                  para unicamente vista para clientes desde el celular.
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen ">
      {/* Mobile View */}
      <div className="md:hidden space-y-6 bg-gray-900 rounded-xl border border-gray-700 p-6 mb-8">
        <div className="flex flex-col">
          <div className="text-center mb-6">
            <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-gray-700 mx-auto">
              <img
                src="https://i.postimg.cc/BvgJXH22/Screenshot-2024-11-23-164653.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-100 mt-4">
              Ezequiel Díaz
            </h1>
            <p className="text-gray-400">@350z</p>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-xl font-bold text-gray-100">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PC View with Drag and Drop */}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="main-sections">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="max-w-4xl mx-auto space-y-8 "
            >
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-100">Sobre Mí</h1>
              </div>
              {sections.map((section, index) => (
                <Draggable key={section.id} draggableId={section.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="cursor-move group relative"
                    >
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap">
                        ¡Puedes mover esta sección!
                      </div>
                      {renderSection(section)}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;