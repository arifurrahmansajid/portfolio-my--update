import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaDatabase, FaTools, FaGraduationCap } from 'react-icons/fa';
import { SiTailwindcss, SiSass, SiMongodb, SiExpress } from 'react-icons/si';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FaReact className="text-cyan-500" size={28} />,
    skills: [
      { icon: <FaHtml5 size={24} />, name: "HTML5", color: "text-orange-600" },
      { icon: <FaCss3Alt size={24} />, name: "CSS3", color: "text-blue-600" },
      { icon: <FaJs size={24} />, name: "JavaScript", color: "text-yellow-400" },
      { icon: <FaReact size={24} />, name: "React", color: "text-cyan-500" },
      { icon: <SiTailwindcss size={24} />, name: "Tailwind CSS", color: "text-sky-400" },
      { icon: <SiSass size={24} />, name: "Sass", color: "text-pink-500" }
    ]
  },
  {
    title: "Backend Development",
    icon: <FaNodeJs className="text-green-600" size={28} />,
    skills: [
      { icon: <FaNodeJs size={24} />, name: "Node.js", color: "text-green-600" },
      { icon: <SiExpress size={24} />, name: "Express.js", color: "text-gray-800" },
      { icon: <SiMongodb size={24} />, name: "MongoDB", color: "text-green-500" }
    ]
  },
  {
    title: "Tools & Platforms",
    icon: <FaTools className="text-gray-600" size={28} />,
    skills: [
      { icon: <FaGitAlt size={24} />, name: "Git & GitHub", color: "text-orange-600" },
      { icon: <FaFigma size={24} />, name: "Figma", color: "text-purple-500" },
      { icon: <FaDatabase size={24} />, name: "Database Basics", color: "text-gray-800" }
    ]
  }
];

const education = {
  title: "Education",
  icon: <FaGraduationCap className="text-blue-600" size={28} />,
  description: [
    "Bachelor of Science in Computer Science & Engineering",
    "Notre Dame University Bangladesh",
    "Dhaka, Bangladesh",
    "2020 - 2025"
  ]
};

const AdditionalSkills = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          My <span className="text-blue-600">Skills</span> & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Skills Categories */}
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 border-2 border-blue-100 group"
            >
              <div className="flex items-center mb-6">
                <span className="mr-4 text-3xl group-hover:scale-110 transition-transform duration-200">{category.icon}</span>
                <h3 className="text-2xl font-extrabold text-blue-700 group-hover:text-blue-900 transition-colors duration-200">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {category.skills.map((skill, i) => (
                  <motion.li 
                    key={i} 
                    whileHover={{ x: 8 }}
                    className="flex items-center bg-white rounded-xl px-4 py-2 shadow-sm hover:bg-blue-50 transition-colors duration-200"
                  >
                    <span className={`mr-4 text-2xl ${skill.color}`}>{skill.icon}</span>
                    <span className="text-lg text-gray-800 font-semibold">{skill.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Education */}
          <motion.div
            whileHover={{ y: -8, scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 border-2 border-blue-100"
          >
            <div className="flex items-center mb-6">
              <span className="mr-4 text-3xl">{education.icon}</span>
              <h3 className="text-2xl font-extrabold text-blue-700">
                {education.title}
              </h3>
            </div>
            <div className="space-y-4">
              {education.description.map((line, index) => (
                <p key={index} className="text-lg text-gray-800 font-medium">
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AdditionalSkills;