import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'; // Import the download icon


const button = () => {
  return (
    <div className="flex justify-center items-center h-screen">
    <a
      href="/resume.pdf" // Path to your resume file
      download="My_Resume.pdf" // Optional: Set the downloaded file name
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center space-x-2 transition duration-300"
    >
      <ArrowDownTrayIcon className="h-5 w-5" /> {/* Icon with size */}
      <span>Download My Resume</span>
    </a>
  </div>
);

}

export default button;
