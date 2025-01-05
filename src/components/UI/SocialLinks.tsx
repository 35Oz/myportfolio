
import { Github, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-4">
      <a href="https://github.com/35Oz" 
         className="text-gray-400 hover:text-white transition-colors"
         target="_blank"
         rel="noopener noreferrer"
         >
        <Github size={24} />
      </a>
      <a href="https://www.linkedin.com/in/ezediaz20/" 
        className="text-gray-400 hover:text-[#0A66C2] transition-colors"
        target="_blank"
        rel="noopener noreferrer"
         >
        <Linkedin size={24} />
      </a>
    </div>
  );
};

export default SocialLinks;