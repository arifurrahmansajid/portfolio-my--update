import React from "react";
import { useParams, Link } from "react-router-dom";
import DhakaFC from "../images/image 2/Screenshot 2025-07-20 093000.png";
import Deliveryooo from "../images/image 2/Screenshot 2025-07-20 092923.png";
import Eatgood from "../images/image 2/Screenshot 2025-06-29 172625.png";
import Wander from "../images/image 2/Screenshot 2025-06-29 171114.png";
import Residence from "../images/image 2/Screenshot 2025-07-20 092705.png";
import Navbar from "../parts/Navbar";
import Footer from "../parts/Footer";

const projects = [
  {
    id: 3,
    title: "LAZEA",
    img: Deliveryooo,
    stack: ["ReactJS", "ExpressJS"],
    description:
      "LAZEA is a modern, responsive web application dedicated to promoting a plant-based lifestyle. It allows users to explore a wide variety of plant-based items, view detailed descriptions, and benefit from an engaging, interactive UI.",
    live: "https://plant-website-a0f51.web.app/",
    github: "https://github.com/arifurrahmansajid/LAZEA",
    challenges: "Managing real-time order tracking and multi-service integration.",
    improvements: "Add mobile app and expand to more cities."
  },
  {
    id: 4,
    title: "Eat the best",
    img: Eatgood,
    stack: ["HTML", "CSS", "React Icons"],
    description:
      "Foodies is a site dedicated to quick meals. This shop has a wide selection of tasty salads and other dishes.",
    live: "https://stately-nougat-dc92ba.netlify.app",
    github: "https://github.com/arifurrahmansajid/Food-website?tab=readme-ov-file",
    challenges: "Building a clean UI and managing menu data.",
    improvements: "Add user accounts and online ordering."
  },
  {
    id: 6,
    title: "Event Explorer ",
    img: DhakaFC,
    stack: ["HTML5", "CSS", "Vanila JS"],
    description:
      "Event Explorer is a dynamic platform to discover and connect with events across music, sports, tech, art, and more.",
    live: "https://dynamic-lily-a7c45f.netlify.app/",
    github: "https://github.com/arifurrahmansajid/Event-Explorer-1",
    challenges: "Responsive design and menu management.",
    improvements: "Add online ordering and delivery tracking."
  },
  {
    id: 1,
    title: "WanderVenture",
    img: Residence,
    stack: ["React Js", "Tailwind CSS"],
    description:
      "Let's hunt for your dream residence. Explore our range of beautiful properties with the addition of separate accommodation suitable for you.",
    live: "https://plant-website-a0f51.web.app/",
    github: "https://hotel-appoinmnet-system.web.app/",
    challenges: "Integrating Hotel search and filtering, responsive design for all devices.",
    improvements: "Add virtual tours and advanced search filters."
  },
   {
    id: 2,
    title: "Nova Tourism",
    img: Wander,
    stack: ["ReactJS", "NodeJS"],
    description:
      "Nova Tourism is a user-friendly online travel and tourism management website that is very helpful in finding your dream spot to visit.",
    live: "https://nova-tourism.web.app/",
    github: "https://github.com/arifurrahmansajid/WanderVenture",
    challenges: "Integrating travel APIs, optimizing for performance, and building a scalable backend.",
    improvements: "Add user reviews, booking system, and AI-based recommendations."
  },
  // ... other projects
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));
  
  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-8">Project not found</h1>
          <Link 
            to="/" 
            className="text-blue-600 hover:text-blue-800 font-medium text-2xl inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-16 px-6 sm:px-8 lg:px-10">
        <div className="w-full max-w-7xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-bold mb-10 text-2xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Projects
          </Link>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="p-10 sm:p-12">
              <h2 className="text-5xl font-bold text-gray-800 mb-10">{project.title}</h2>
              
              <div className="mb-12">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-auto max-h-[40rem] object-contain rounded-xl border-2 border-gray-200 mx-auto"
                />
              </div>

              <div className="space-y-10">
                <div>
                  <h3 className="text-3xl font-semibold text-gray-800 mb-6">Main Technology Stack:</h3>
                  <ul className="list-disc list-inside space-y-3 text-gray-700 pl-4 text-2xl">
                    {project.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-3xl font-semibold text-gray-800 mb-6">Description:</h3>
                  <p className="text-gray-700 text-2xl leading-relaxed">{project.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-3xl font-semibold text-gray-800 mb-6">Live Project:</h3>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline text-2xl break-all"
                    >
                      {project.live}
                    </a>
                  </div>
                  <div>
                    <h3 className="text-3xl font-semibold text-gray-800 mb-6">GitHub (Client):</h3>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline text-2xl break-all"
                    >
                      {project.github}
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-semibold text-gray-800 mb-6">Challenges:</h3>
                  <p className="text-gray-700 text-2xl leading-relaxed">{project.challenges}</p>
                </div>

                <div>
                  <h3 className="text-3xl font-semibold text-gray-800 mb-6">Potential Improvements & Future Plans:</h3>
                  <p className="text-gray-700 text-2xl leading-relaxed">{project.improvements}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProjectDetails;