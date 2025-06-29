import AboutImg from "../images/working-about.jpg";
import RoundedText from "../images/text2.svg";
import WorkingEmoji from "../images/working-emoji.png";

function AboutMe() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
              <img src={AboutImg} alt="mee" className="img-side__main-img" />
              <span>
                <img src={RoundedText} alt="text" />
              </span>
            </div>
            <div className="text-side">
              <h4>About me</h4>
              <h3>
                A dedicated MERN stack Developer <br /> based in Dhaka, Bangladesh.
                📍
              </h3>
              <p>
                My programming journey began in University, where I was fascinated
                by how websites work. I started with basic HTML and CSS, and soon
                found myself building small projects for friends and family. Over the
                years, I expanded my skills to JavaScript, React, and the full MERN
                stack, always eager to learn new technologies and best practices.
              </p>
              <p>
                I enjoy working on interactive, user-friendly web applications that
                solve real-world problems. My favorite projects are those that
                challenge me to think creatively and collaborate with others. I thrive
                in team environments and love turning ideas into polished digital
                experiences.
              </p>
              <p>
                Outside of programming, I am passionate about football, painting, and
                exploring new places. I believe that creativity and curiosity drive
                innovation, both in code and in life. Whether I'm coding, playing
                sports, or creating art, I always bring energy and enthusiasm to
                everything I do.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          
        </div>
      </section>
    </>
  );
}

export default AboutMe;
