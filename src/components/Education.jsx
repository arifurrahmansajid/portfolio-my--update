import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institute: "Notre Dame University Bangladesh",
    year: "2020 - 2024",
    result: "CGPA: 3.72/4.00",
  }
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-6 bg-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Education</span>
          </h2>
          <div className="w-32 h-1.5 bg-blue-500 mx-auto mb-6"></div>
          <p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Mulish', sans-serif" }}
          >
            My academic journey in Computer Science that shaped my technical foundation
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 shadow-xl rounded-2xl p-10 hover:shadow-2xl transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <FaGraduationCap className="text-blue-600 text-4xl" />
                <h3 className="text-3xl font-bold text-gray-800">
                  {edu.degree}
                </h3>
              </div>
              <div 
                className="space-y-6 text-3xl"
                style={{ fontFamily: "'Mulish', sans-serif" }}
              >
                <p className="text-gray-800">
                  <span className="font-bold">Institution:</span> {edu.institute}
                </p>
                <p className="text-gray-800">
                  <span className="font-bold">Duration:</span> {edu.year}
                </p>
                <p className="text-gray-800">
                  <span className="font-bold">Result:</span> {edu.result}
                </p>
                {edu.highlights && (
                  <div className="mt-8">
                    <h4 className="font-bold text-gray-800 mb-4 text-3xl">
                      Key Highlights:
                    </h4>
                    <ul className="list-disc list-inside text-gray-800 space-y-4">
                      {edu.highlights.map((item, i) => (
                        <li key={i} className="text-2xl">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;