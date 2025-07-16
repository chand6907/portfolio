import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            ABOUT ME
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative group flex justify-center order-2 lg:order-1">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                  <img 
                    src="/WhatsApp Image 2025-07-14 at 16.46.58_846a0c76.jpg" 
                    alt="Chand - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
              <p>
                A driven IT student dedicated to turning innovative concepts into impactful digital solutions. 
                My journey in technology started with curiosity and has evolved into a deep commitment to creating 
                seamless user experiences and robust backend systems.
              </p>
              
              <p>
                Currently pursuing my BTech in Information Technology at GVP College of Engineering, I'm proficient 
                in designing modern web applications with ReactJS and the MERN stack. I have hands-on experience 
                with full-stack development, from crafting intuitive user interfaces to building scalable server-side solutions.
              </p>

              <p>
                Beyond academics, I've demonstrated leadership as a volleyball team captain and served as a Student 
                Ambassador. I'm actively seeking internship opportunities where I can apply my technical skills and 
                creativity to make meaningful contributions to innovative projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;