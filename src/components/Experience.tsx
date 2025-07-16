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
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            EXPERIENCE
          </h2>
          <div className="text-2xl text-gray-400 mb-6">& QUALIFICATIONS 🎓</div>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <IconComponent size={20} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>
                {education.map((edu, index) => (
                  <div key={index} className="relative flex gap-6 pb-8">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                      <GraduationCap size={16} className="text-white" />
                    </div>
                    <div className="flex-grow bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                        <div className="flex items-center gap-2 text-cyan-400 text-sm">
                          <Calendar size={14} />
                          {edu.period}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 mb-3">
                        <MapPin size={14} />
                        <span>{edu.institution}, {edu.location}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{edu.description}</p>
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
                <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>
                {experience.map((exp, index) => (
                  <div key={index} className="relative flex gap-6 pb-8">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                      <Briefcase size={16} className="text-white" />
                    </div>
                    <div className="flex-grow bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-cyan-400 text-sm">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 mb-3">
                        <MapPin size={14} />
                        <span>{exp.company}, {exp.location}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{exp.description}</p>
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
                <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>
                {leadership.map((lead, index) => (
                  <div key={index} className="relative flex gap-6 pb-8">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                      <Award size={16} className="text-white" />
                    </div>
                    <div className="flex-grow bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h3 className="text-xl font-semibold text-white">{lead.title}</h3>
                        <div className="flex items-center gap-2 text-cyan-400 text-sm">
                          <Calendar size={14} />
                          {lead.period}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 mb-3">
                        <Award size={14} />
                        <span>{lead.organization}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{lead.description}</p>
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