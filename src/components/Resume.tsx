import React from 'react';
import { Download, FileText, Eye } from 'lucide-react';

const Resume = () => {
  const handleViewResume = () => {
    window.open('https://chand6907.github.io/resume-redirector/', '_blank');
  };

  return (
    <section id="resume" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full">
              <FileText size={32} className="text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-4">
            RESUME 📄
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          
          <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
            View my complete resume to learn more about my experience, skills, and achievements. 
            Get a comprehensive overview of my journey as a developer and IT student.
          </p>
          
          <div className="flex justify-center">
            <button
              onClick={handleViewResume}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full text-white font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              <Eye size={24} />
              View Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;