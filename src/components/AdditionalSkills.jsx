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
      {
        name: "HTML5",
        icon: <FaHtml5 className="text-orange-600 text-4xl" />
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="text-blue-600 text-4xl" />
      },
      {
        name: "JavaScript",
        icon: <FaJs className="text-yellow-400 text-4xl" />
      },
      {
        name: "React",
        icon: <FaReact className="text-cyan-500 text-4xl" />
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400 text-4xl" />
      },
      {
        name: "Sass",
        icon: <SiSass className="text-pink-500 text-4xl" />
      }
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-600 text-4xl" />
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-gray-800 dark:text-white text-4xl" />
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-500 text-4xl" />
      }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      {
        name: "Git & GitHub",
        icon: <FaGitAlt className="text-orange-600 text-4xl" />
      },
      {
        name: "Figma",
        icon: <FaFigma className="text-purple-500 text-4xl" />
      },
      {
        name: "Database Basics",
        icon: <FaDatabase className="text-gray-800 dark:text-white text-4xl" />
      }
    ]
  }
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-[80vh] px-6 pt-10 bg-white dark:bg-gray-900 pb-6"
    >
      <h2 className="text-2xl md:text-3xl md:font-extrabold text-center text-gray-900 dark:text-white tracking-wide">
        Skills
      </h2>
      <div className="w-24 h-1 bg-indigo-500 mx-auto mt-2"></div>
      <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg max-w-xl mx-auto text-center mb-8">
        The technologies and tools I use to build modern web applications
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Frontend Card - Full Width */}
        <div className="md:col-span-2">
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.05}
            transitionSpeed={500}
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-indigo-600 dark:text-indigo-400">
                {SkillsInfo[0].title}
              </h3>
              <div className="flex flex-wrap gap-6 justify-center">
                {SkillsInfo[0].skills.map(({ name, icon }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center space-y-3 p-4 w-24 rounded-xl cursor-pointer hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition"
                  >
                    <div className="flex items-center justify-center w-12 h-12">
                      {icon}
                    </div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                      {name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Tilt>
        </div>

        {/* Backend Card - Half Width */}
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          scale={1.05}
          transitionSpeed={500}
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-full">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-indigo-600 dark:text-indigo-400">
              {SkillsInfo[1].title}
            </h3>
            <div className="flex flex-wrap gap-6 justify-center">
              {SkillsInfo[1].skills.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex flex-col items-center space-y-3 p-4 w-24 rounded-xl cursor-pointer hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition"
                >
                  <div className="flex items-center justify-center w-12 h-12">
                    {icon}
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Tilt>

        {/* Tools Card - Half Width */}
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          scale={1.05}
          transitionSpeed={500}
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-full">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-indigo-600 dark:text-indigo-400">
              {SkillsInfo[2].title}
            </h3>
            <div className="flex flex-wrap gap-6 justify-center">
              {SkillsInfo[2].skills.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex flex-col items-center space-y-3 p-4 w-24 rounded-xl cursor-pointer hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition"
                >
                  <div className="flex items-center justify-center w-12 h-12">
                    {icon}
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default Skills;