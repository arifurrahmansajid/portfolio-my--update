
import { FaYoutube, FaChartLine } from 'react-icons/fa';

const AdditionalSkills = () => {
  return (
    <section className="additional-skills">
      <h2 className="skills-heading">Additional Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <h3 className="skill-title">
            <FaYoutube className="skill-icon" /> Video Editing for YouTube
          </h3>
          <p className="skill-description">
            Proficient in creating engaging video content for YouTube channels. 
            Skilled in cutting, transitions, effects, and optimizing videos for 
            the platform. Experience in crafting thumbnails and organizing content 
            for maximum viewer engagement.
          </p>
        </div>
        <div className="skill">
          <h3 className="skill-title">
            <FaChartLine className="skill-icon" /> Digital Marketing Basics
          </h3>
          <p className="skill-description">
            Foundational knowledge in digital marketing strategies. Understanding 
            of SEO principles, social media marketing, and content creation for 
            online platforms. Familiar with analytics tools to track and improve 
            online performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdditionalSkills;
