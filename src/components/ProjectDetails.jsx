import React from "react";
import { useParams, Link } from "react-router-dom";
import DhakaFC from "../images/image 2/Screenshot 2025-06-29 172946.png";
import Deliveryooo from "../images/image 2/Screenshot 2025-06-29 171703.png";
import Eatgood from "../images/image 2/Screenshot 2025-06-29 172625.png";
import Wander from "../images/image 2/Screenshot 2025-06-29 171114.png";
import Residence from "../images/image 2/Screenshot 2025-06-29 170832.png";

const projects = [
 {
    id: 1,
    title: "Residence",
    img: Residence,
    stack: ["React Js", "Tailwind CSS"],
    description:
      "Let's hunt for your dream residence. Explore our range of beautiful properties with the addition of separate accommodation suitable for you.",
    live: "https://residence-three.vercel.app/",
    github: "https://github.com/arifurrahmansajid/Residence",
    challenges: "Integrating property search and filtering, responsive design for all devices.",
    improvements: "Add virtual tours and advanced search filters."
  },
  {
    id: 2,
    title: "WanderVenture",
    img: Wander,
    stack: ["ReactJS", "NodeJS"],
    description:
      "WanderVenture is a user-friendly online travel and tourism management website that is very helpful in finding your dream spot to visit.",
    live: "https://effortless-semolina-2fc164.netlify.app",
    github: "https://github.com/arifurrahmansajid/WanderVenture",
    challenges: "Integrating travel APIs, optimizing for performance, and building a scalable backend.",
    improvements: "Add user reviews, booking system, and AI-based recommendations."
  },
  {
    id: 3,
    title: "Deliveryooo",
    img: Deliveryooo,
    stack: ["ReactJS", "CSS"],
    description:
      "Deliveryoo is the most trusted community-fueled platform that provides one convenient app for ride-sharing, food delivery, parcel & courier services in Bangladesh.",
    live: "https://deliveryoobd.netlify.app/",
    github: "https://github.com/arifurrahmansajid/Deliveryoo",
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
    title: "DhakaFC Restro ",
    img: DhakaFC,
    stack: ["HTML5", "CSS", "Vanila JS"],
    description:
      "DhakaFC is a responsive Fast Food website, noodles, burgers, chicken and more from the comfort of your own home.",
    live: "https://dhakafcbd.netlify.app/",
    github: "https://github.com/arifurrahmansajid/dhakafc",
    challenges: "Responsive design and menu management.",
    improvements: "Add online ordering and delivery tracking."
  }
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));
  
  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-500 mb-6">Project not found</h1>
          <Link 
            to="/" 
            className="text-blue-600 hover:text-blue-800 font-medium text-lg inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-8 lg:px-10">
      <div className="w-full max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-8 text-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Projects
        </Link>

        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          <div className="p-8 sm:p-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">{project.title}</h2>
            
            <div className="mb-10">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-auto max-h-[32rem] object-contain rounded-lg border-2 border-gray-200 mx-auto"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Main Technology Stack:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2 text-xl">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Description:</h3>
                <p className="text-gray-700 text-xl">{project.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Live Project:</h3>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline text-xl break-all"
                  >
                    {project.live}
                  </a>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">GitHub (Client):</h3>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline text-xl break-all"
                  >
                    {project.github}
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Challenges:</h3>
                <p className="text-gray-700 text-xl">{project.challenges}</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Potential Improvements & Future Plans:</h3>
                <p className="text-gray-700 text-xl">{project.improvements}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;