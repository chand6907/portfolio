import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  const techStack = [
    { 
      name: 'HTML', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      color: 'from-orange-500 to-red-500' 
    },
    { 
      name: 'CSS', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      color: 'from-blue-500 to-cyan-500' 
    },
    { 
      name: 'JavaScript', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      color: 'from-yellow-400 to-orange-500' 
    },
    { 
      name: 'ReactJS', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: 'from-cyan-400 to-blue-500' 
    },
    { 
      name: 'NextJS', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      color: 'from-gray-700 to-gray-900' 
    },
    { 
      name: 'Git', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      color: 'from-orange-600 to-red-600' 
    },
    { 
      name: 'React Native', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: 'from-cyan-400 to-blue-500' 
    },
    { 
      name: 'NodeJS', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: 'from-green-500 to-emerald-600' 
    },
    { 
      name: 'Firebase', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      color: 'from-yellow-500 to-orange-600' 
    },
    { 
      name: 'MongoDB', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      color: 'from-green-600 to-emerald-700' 
    },
    { 
      name: 'Python', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      color: 'from-blue-500 to-yellow-500' 
    },
    { 
      name: 'C', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      color: 'from-blue-600 to-purple-600' 
    },
    { 
      name: 'MySQL', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      color: 'from-blue-600 to-cyan-600' 
    },
    { 
      name: 'ExpressJS', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      color: 'from-gray-600 to-gray-800' 
    },
    { 
      name: 'Google Cloud', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
      color: 'from-blue-500 to-green-500' 
    },
    { 
      name: 'GitHub', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      color: 'from-gray-700 to-gray-900' 
    }
  ];

  const softSkills = [
    { name: 'Communication', emoji: '💬' },
    { name: 'Public Speaking', emoji: '🎤' }, 
    { name: 'Leadership', emoji: '👑' },
    { name: 'Networking', emoji: '🤝' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black" ref={skillsRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            SKILLS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white">Technical Skills</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className={`group relative flex flex-col items-center justify-center transition-all duration-500 hover:transform hover:scale-110 ${
                  isVisible 
                    ? index % 2 === 0 
                      ? 'animate-slide-in-left' 
                      : 'animate-slide-in-right'
                    : 'opacity-0 translate-x-full'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Logo Container */}
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-2 sm:mb-3 transition-all duration-300 group-hover:scale-125">
                  <img 
                    src={tech.icon} 
                    alt={tech.name}
                    className="w-full h-full object-contain filter drop-shadow-lg"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-4xl">${getEmojiForTech(tech.name)}</div>`;
                      }
                    }}
                  />
                  
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
                </div>

                {/* Tech Name */}
                <span className="text-xs sm:text-sm text-gray-300 font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.name}
                </span>

                {/* Animated border on hover */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-cyan-400/30 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-white">Soft Skills</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-4 sm:p-6 border border-gray-700 text-center transition-all duration-500 hover:transform hover:scale-105 hover:border-cyan-400/50 ${
                  isVisible 
                    ? 'animate-fade-in-up' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  animationDelay: `${(index + techStack.length) * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="text-2xl sm:text-4xl mb-2 sm:mb-3">{skill.emoji}</div>
                <p className="text-sm sm:text-base text-white font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper function to get emoji fallback
const getEmojiForTech = (techName: string): string => {
  const emojiMap: { [key: string]: string } = {
    'HTML': '🌐',
    'CSS': '🎨',
    'JavaScript': '⚡',
    'ReactJS': '⚛️',
    'NextJS': '🔺',
    'Git': '📝',
    'React Native': '📱',
    'NodeJS': '🟢',
    'Firebase': '🔥',
    'MongoDB': '🍃',
    'Python': '🐍',
    'C': '💻',
    'MySQL': '🗄️',
    'ExpressJS': '🚀',
    'Google Cloud': '☁️',
    'GitHub': '🐙'
  };
  return emojiMap[techName] || '💻';
};

export default Skills;