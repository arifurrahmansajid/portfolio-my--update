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
              I have a wide range of knowledge in HTML, CSS, JavaScript, React, Tailwind, and Bootstarp making me an excellent candidate for the position of Junior Front-End Developer. I have extensive expertise creating and managing user-friendly, responsive websites. I am an expert at making interactive, modern user interfaces by using modern development tools and methodologies to write clean, optimized code. I am also an excellent team player who enjoys working in interdisciplinary groups to create cutting-edge online apps.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
