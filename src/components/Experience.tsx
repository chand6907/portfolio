import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('education');

  const education = [
    {
      degree: 'BTech in Information Technology',
      institution: 'GVP College of Engineering',
      location: 'Visakhapatnam',
      period: '2024 - Present',
      description: 'Currently pursuing Bachelor of Technology in Information Technology with focus on software development, data structures, and modern web technologies.'
    },
    {
      degree: 'Class XII',
      institution: 'Ranbir Higher Secondary School',
      location: 'Jammu',
      period: '2020 - 2022',
      description: 'Completed higher secondary education with strong foundation in science and mathematics.'
    },
    {
      degree: 'Class X',
      institution: 'Vidya Peeth Public Hr. Sec. School',
      location: 'Jammu',
      period: '2020 (Pass-out)',
      description: 'Completed secondary education with excellent academic performance.'
    }
  ];

  const experience = [
    {
      title: 'Intern',
      company: 'Parthap Pharmacy',
      location: 'Local',
      period: 'Recent',
      description: 'Gained hands-on experience in pharmaceutical operations and customer service. Developed skills in inventory management, customer interaction, and professional work environment adaptation.'
    }
  ];

  const leadership = [
    {
      title: 'Volleyball Team Captain',
      organization: 'High School',
      period: 'School Years',
      description: 'Led the volleyball team and demonstrated leadership skills in sports and team coordination.',
      icon: Award
    },
    {
      title: 'Student Ambassador',
      organization: "Let's Upgrade",
      period: 'Recent',
      description: 'Served as a student ambassador promoting educational initiatives and technology learning.',
      icon: Award
    }
  ];

  const tabs = [
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'work', label: 'Work', icon: Briefcase },
    { id: 'leadership', label: 'Leadership', icon: Award }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            EXPERIENCE
          </h2>
          <div className="text-lg sm:text-2xl text-gray-400 mb-6">& QUALIFICATIONS 🎓</div>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-1 sm:p-2 border border-gray-700 overflow-x-auto">
            <div className="flex gap-1 sm:gap-0 min-w-max">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <IconComponent size={16} className="sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base font-medium">{tab.label}</span>
                </button>
              );
            })}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute left-3 sm:left-4 top-6 sm:top-8 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>
                {education.map((edu, index) => (
                  <div key={index} className="relative flex gap-3 sm:gap-6 pb-6 sm:pb-8">
                    <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                      <GraduationCap size={12} className="sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="flex-grow bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-0">{edu.degree}</h3>
                        <div className="flex items-center gap-2 text-cyan-400 text-sm">
                          <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                          {edu.period}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 mb-3 text-sm sm:text-base">
                        <MapPin size={12} className="sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                        <span>{edu.institution}, {edu.location}</span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Work Tab */}
          {activeTab === 'work' && (
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute left-3 sm:left-4 top-6 sm:top-8 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>
                {experience.map((exp, index) => (
                  <div key={index} className="relative flex gap-3 sm:gap-6 pb-6 sm:pb-8">
                    <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                      <Briefcase size={12} className="sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="flex-grow bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-0">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-cyan-400 text-sm">
                          <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                          {exp.period}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 mb-3 text-sm sm:text-base">
                        <MapPin size={12} className="sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                        <span>{exp.company}, {exp.location}</span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Leadership Tab */}
          {activeTab === 'leadership' && (
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute left-3 sm:left-4 top-6 sm:top-8 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>
                {leadership.map((lead, index) => (
                  <div key={index} className="relative flex gap-3 sm:gap-6 pb-6 sm:pb-8">
                    <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                      <Award size={12} className="sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="flex-grow bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-0">{lead.title}</h3>
                        <div className="flex items-center gap-2 text-cyan-400 text-sm">
                          <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                          {lead.period}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 mb-3 text-sm sm:text-base">
                        <Award size={12} className="sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                        <span>{lead.organization}</span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{lead.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;