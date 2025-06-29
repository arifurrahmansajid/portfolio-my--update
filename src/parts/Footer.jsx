import { FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-700 via-blue-900 to-gray-900 text-white pt-12 pb-6 mt-16 rounded-t-3xl shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
          <div className="flex items-center gap-3 group mb-4 md:mb-0">
            <span
              role="img"
              aria-label="wave"
              className="text-4xl transition-transform duration-300 group-hover:rotate-12"
            >
              👋
            </span>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-100">
              Arifur Rahman Sajid
            </span>
          </div>
          <div className="flex gap-6">
            <a
              aria-label="linkedin"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/arifursajid3456/"
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              aria-label="github"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/arifurrahmansajid"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              <FaGithub size={28} />
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-8 pt-6 border-t border-white/10 text-sm opacity-90">
          <span>© {currentYear} All rights reserved.</span>
          <span className="flex items-center">
            Made with <FaHeart className="mx-1 text-red-500" /> by Arifur
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;