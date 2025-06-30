import React, { useState, useEffect, useRef } from 'react';
import { Code2, Database, Globe, GraduationCap, MapPin, Briefcase, Mail, ExternalLink, ChevronRight, Star } from 'lucide-react';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 80,
          y: ((e.clientY - rect.top) / rect.height) * 80
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const skills = [
    { name: 'Frontend Development', level: 88, description: 'HTML5, CSS3, JavaScript ES6+', category: 'Core' },
    { name: 'React Ecosystem', level: 82, description: 'Hooks, Context, Router, State Management', category: 'Framework' },
    { name: 'MERN Stack', level: 65, description: 'MongoDB, Express, React, Node.js', category: 'Full Stack' },
    { name: 'Backend Technologies', level: 48, description: 'RESTful APIs, Database Design', category: 'Server' },
    { name: 'Development Tools', level: 75, description: 'Git, npm, Webpack, VS Code', category: 'Tools' }
  ];

  const projects = [
    { 
      name: 'Employee Management System', 
      tech: ['React', 'Node.js', 'MongoDB', 'Express'], 
      type: 'Enterprise Solution',
      description: 'Comprehensive HR management platform with role-based access control',
      impact: 'Streamlined workforce operations'
    },
    { 
      name: 'E-Commerce Platform', 
      tech: ['MERN Stack', 'Stripe API', 'JWT'], 
      type: 'Commercial Application',
      description: 'Full-featured online marketplace with payment integration',
      impact: 'End-to-end shopping experience'
    },
    { 
      name: 'Spotify Clone', 
      tech: ['React', 'Spotify API', 'Context API'], 
      type: 'Media Application',
      description: 'Music streaming interface with playlist management',
      impact: 'Enhanced user engagement'
    },
    { 
      name: 'Subscription Tracker API', 
      tech: ['Node.js', 'Express', 'MongoDB'], 
      type: 'Backend Service',
      description: 'RESTful API for managing recurring subscriptions',
      impact: 'Financial tracking automation'
    }
  ];

  const achievements = [
    { metric: '4+', label: 'Projects Completed', icon: <Star className="w-5 h-5" /> },
    { metric: '60%', label: 'MERN Proficiency', icon: <Database className="w-5 h-5" /> },
    { metric: '4th', label: 'Semester BCA', icon: <GraduationCap className="w-5 h-5" /> }
  ];

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-black relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(20, 20, 20, 0.8) 0%, #000000 50%)`
      }}
    >
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(40,40,40,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(40,40,40,.03)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900/5 via-transparent to-gray-800/5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Executive Header */}
        <header className={`text-center mb-24 transition-all duration-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block relative">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-white mb-6 relative">
              Biswash Mainali
          
            </h1>
            <div className="absolute -bottom-4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
          </div>
          <p className="text-xl md:text-2xl text-emerald-500 font-light tracking-wide mt-12 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences through innovative web development
            <span className="block text-lg text-white mt-2">Full-Stack Developer • BCA Student • Tech Enthusiast</span>
          </p>
        </header>

        {/* Achievement Metrics */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 transition-all duration-1500 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.label}
              className="group relative bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/60 transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setActiveSection(`achievement-${index}`)}
              onMouseLeave={() => setActiveSection(null)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-gray-300 group-hover:text-white transition-colors">
                  {achievement.icon}
                </div>
                <div className="text-right">
                  <div className="text-3xl md:text-4xl font-light text-white mb-1">{achievement.metric}</div>
                  <div className="text-sm text-gray-400 font-light tracking-wide">{achievement.label}</div>
                </div>
              </div>
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gray-400 to-gray-600 transition-all duration-500 ${
                activeSection === `achievement-${index}` ? 'w-full' : 'w-0'
              }`}></div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column - Professional Profile */}
          <div className={`lg:col-span-2 space-y-8 transition-all duration-1500 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Professional Summary */}
            <section className="group relative bg-gray-900/40 backdrop-blur-xl border border-gray-700/40 rounded-3xl p-10 hover:bg-gray-800/50 transition-all duration-700">
              <div className="flex items-start justify-between mb-8">
                <h2 className="text-3xl font-light text-white tracking-wide">Professional Profile</h2>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg font-light">
                  Currently pursuing Bachelor of Computer Applications at Triton International College, 
                  with a strong foundation in modern web development technologies and a passion for creating 
                  scalable digital solutions.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-700/40">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <GraduationCap className="w-5 h-5 text-gray-400" />
                      <span className="text-white font-medium">Education</span>
                    </div>
                    <p className="text-sm text-gray-400 pl-8">BCA 4th Semester<br/>Triton International College</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      <span className="text-white font-medium">Location</span>
                    </div>
                    <p className="text-sm text-gray-400 pl-8">ShivaNagar, Townplanning<br/>Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Career Objectives */}
            <section className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/40 rounded-3xl p-10 hover:bg-gray-800/50 transition-all duration-700">
              <h3 className="text-2xl font-light text-white mb-8 tracking-wide">Career Objectives</h3>
              <div className="space-y-4">
                {[
                  'Securing strategic internship opportunities in web development',
                  'Building long-term freelance partnerships with innovative clients',
                  'Advancing full-stack development expertise through practical application'
                ].map((objective, index) => (
                  <div key={index} className="flex items-start gap-4 group/item">
                    <div className="w-2 h-2 rounded-full bg-gray-400 mt-3 group-hover/item:bg-gray-300 transition-colors"></div>
                    <p className="text-gray-300 leading-relaxed font-light group-hover/item:text-white transition-colors">
                      {objective}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Technical Expertise */}
          <div className={`lg:col-span-3 space-y-8 transition-all duration-1500 delay-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Technical Skills */}
            <section className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/40 rounded-3xl p-10 hover:bg-gray-800/50 transition-all duration-700">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-3xl font-light text-white tracking-wide">Technical Expertise</h3>
                <Code2 className="w-8 h-8 text-gray-400" />
              </div>
              <div className="space-y-8">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-white font-medium text-lg mb-1">{skill.name}</h4>
                        <p className="text-gray-400 text-sm font-light">{skill.description}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-light text-gray-300">{skill.level}%</span>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">{skill.category}</div>
                      </div>
                    </div>
                    <div className="relative h-2 bg-gray-800/60 rounded-full overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-gray-400 to-gray-600 rounded-full transition-all duration-1500 ease-out group-hover/skill:from-gray-300 group-hover/skill:to-gray-500"
                        style={{ 
                          width: isLoaded ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 200 + 800}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Portfolio Projects */}
          <section className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6 md:p-8 transition-all duration-700">
  <div className="flex items-center justify-between mb-6">
    <h3 className="text-xl md:text-2xl font-medium text-white">Featured Projects</h3>
    <ExternalLink className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
    {projects.map((project, index) => (
      <div 
        key={project.name}
        className="group relative bg-gray-800/30 border border-gray-700/50 rounded-xl p-5 hover:bg-gray-700/40 transition-all duration-300"
        onMouseEnter={() => setActiveSection(`project-${index}`)}
        onMouseLeave={() => setActiveSection(null)}
      >
        <div className="flex justify-between items-start gap-3 mb-3">
          <h4 className="text-base md:text-lg font-medium text-[#2dd4bf] group-hover:text-blue-500 transition-colors">
            {project.name}
          </h4>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-emerald-700/60 text-gray-300 border border-gray-600/50">
            {project.type}
          </span>
        </div>
        
        <p className="text-sm text-gray-300 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span 
              key={tech} 
              className="inline-flex items-center px-2 py-1 text-xs rounded-md bg-gray-800/70 text-gray-300 border border-gray-700/50"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <ChevronRight className="w-3 h-3" />
            {project.impact}
          </span>
          <div className={`h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ${
            activeSection === `project-${index}` ? 'w-full' : 'w-0'
          }`}></div>
        </div>
      </div>
    ))}
  </div>
</section>
          </div>
        </div>

        {/* Professional CTA */}
        <footer className={`mt-20 text-center transition-all duration-1500 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-light text-white mb-6 tracking-wide">Let's Build Something Extraordinary</h3>
            <p className="text-gray-300 text-lg font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              Ready to collaborate on innovative projects that push the boundaries of web development. 
              Let's discuss how we can create impactful digital solutions together.
            </p>
            <button className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <a href="/contactPage" className='tracking-wide'>Initiate COllaboration</a>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;