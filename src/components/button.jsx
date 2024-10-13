import { FaDownload } from 'react-icons/fa';

const button = () => {
  return (
    <div>
     <a
            href="/src/images/Profile.pdf"
            download
            className="download-btn"
            onClick={(e) => {
              const btn = e.currentTarget;
              btn.classList.add('downloading');
              setTimeout(() => {
                btn.classList.remove('downloading');
              }, 3000);
            }}
          >
            <FaDownload className="download-icon" />
            <span>Download CV</span>
          </a>
    </div>
  );
}

export default button;
