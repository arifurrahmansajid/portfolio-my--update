import React from "react";
import Tilt from "react-parallax-tilt";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaDatabase 
} from 'react-icons/fa';
import { SiTailwindcss, SiSass, SiMongodb, SiExpress } from 'react-icons/si';

const SkillsInfo = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-600 text-5xl" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-5xl" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
      { name: "React", icon: <FaReact className="text-cyan-500 text-5xl" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-5xl" /> },
      { name: "Sass", icon: <SiSass className="text-pink-500 text-5xl" /> }
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-5xl" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-800 text-5xl" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-5xl" /> }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-600 text-5xl" /> },
      { name: "Figma", icon: <FaFigma className="text-purple-500 text-5xl" /> },
      { name: "Database Basics", icon: <FaDatabase className="text-gray-800 text-5xl" /> }
    ]
  }
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-6 bg-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <div className="w-32 h-1.5 bg-blue-500 mx-auto mb-6"></div>
          <p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Mulish', sans-serif" }}
          >
            The technologies and tools I use to build modern web applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Frontend Card - Full Width */}
          <div className="lg:col-span-2">
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.05}
              transitionSpeed={500}
              className="h-full"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 h-full">
                <h3 className="text-3xl font-bold text-center text-blue-600 mb-8">
                  {SkillsInfo[0].title}
                </h3>
                <div className="flex flex-wrap gap-8 justify-center">
                  {SkillsInfo[0].skills.map(({ name, icon }) => (
                    <div
                      key={name}
                      className="flex flex-col items-center space-y-4 p-6 w-36 rounded-xl cursor-pointer hover:bg-blue-50 transition-all"
                    >
                      <div className="flex items-center justify-center w-16 h-16">
                        {icon}
                      </div>
                      <p 
                        className="text-lg font-semibold text-gray-800 text-center"
                        style={{ fontFamily: "'Mulish', sans-serif" }}
                      >
                        {name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Tilt>
          </div>

          {/* Backend Card */}
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.05}
            transitionSpeed={500}
            className="h-full"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 h-full">
              <h3 className="text-3xl font-bold text-center text-blue-600 mb-8">
                {SkillsInfo[1].title}
              </h3>
              <div className="flex flex-wrap gap-8 justify-center">
                {SkillsInfo[1].skills.map(({ name, icon }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center space-y-4 p-6 w-36 rounded-xl cursor-pointer hover:bg-blue-50 transition-all"
                  >
                    <div className="flex items-center justify-center w-16 h-16">
                      {icon}
                    </div>
                    <p 
                      className="text-lg font-semibold text-gray-800 text-center"
                      style={{ fontFamily: "'Mulish', sans-serif" }}
                    >
                      {name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Tilt>

          {/* Tools Card */}
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.05}
            transitionSpeed={500}
            className="h-full"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 h-full">
              <h3 className="text-3xl font-bold text-center text-blue-600 mb-8">
                {SkillsInfo[2].title}
              </h3>
              <div className="flex flex-wrap gap-8 justify-center">
                {SkillsInfo[2].skills.map(({ name, icon }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center space-y-4 p-6 w-36 rounded-xl cursor-pointer hover:bg-blue-50 transition-all"
                  >
                    <div className="flex items-center justify-center w-16 h-16">
                      {icon}
                    </div>
                    <p 
                      className="text-lg font-semibold text-gray-800 text-center"
                      style={{ fontFamily: "'Mulish', sans-serif" }}
                    >
                      {name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default Skills;