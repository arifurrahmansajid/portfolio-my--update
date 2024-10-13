import VentureShop from "../images/VentureShop-FullView.png";
import DhakaFC from "../images/DhakaFC-FullView.png";
import ProBox from "./ProBox.jsx";
import FoodiesWebApp from "../images/FoodiesWebsite-Full.png";
import HyperTouch from "../images/HyperTouch-fulllview.png";
import Gymnation from "../images/GymNation.png"
import Deliveryooo from "../images/Deliveryoo Web.png"

function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">
              

              <ProBox
                title="Deliveryooo"
                img={Deliveryooo}
                description="Deliveryoo is the most trusted community-fueled platform that provides one convenient app for ride-sharing, food delivery, parcel & courier services in Bangladesh. 
                "
                techno1="ReactJS"
                techno2="CSS"
                code="https://github.com/farhanshahriyar/Deliveryoo"
                demo="https://deliveryoobd.netlify.app/"
                scrollY="-74%"
                icon="🚚"
                cName="reversed-proj"
              />

              <ProBox
                title="Foodies E-Commerce"
                img={FoodiesWebApp}
                description="Foodies is a site dedicated to quick meals. This shop has a wide selection of tasty salads and other dishes."
                techno1="HTML5"
                techno2="CSS"
                techno3="Vanila JS"
                code="https://github.com/farhanshahriyar/foodies"
                demo="https://foodiesbd.netlify.app/"
                scrollY="-83%"
                icon="🛒"
              />

              <ProBox
                title="HyperTouch"
                img={HyperTouch}
                description="HyperTouch is a Website where people can buy their perfect cloths, shoes and others."
                techno1="React"
                techno2="CSS"
                techno3="Material UI"
                techno4="SC"
                code="https://github.com/farhanshahriyar/HyperTouch-frontend"
                demo="https://hypertouch.netlify.app/"
                scrollY="-74%"
                icon="🚗"
                cName="reversed-proj"
              />

              <ProBox
                title="VentureShop"
                img={VentureShop}
                description="Venture Shop web app is a React-based e-commerce site featuring anonymous login, sign-up, cart, wishlist, and more. Firebase was utilized for all of the above, plus file storage, user authentication, and product information."
                techno1="ReactJS"
                techno2="CSS"
                techno3="Firebase"
                techno4="Material UI"
                code="https://github.com/farhanshahriyar/Venture-Shop"
                demo="https://ventureshop.netlify.app/"
                scrollY="-89%"
                icon="🛒"
              />

              <ProBox
                title="DhakaFC Restro E-Commerce"
                img={DhakaFC}
                description="DhakaFC is a responsive Fast Food website, where you can order delicious noodles, burgers, chicken and more from the comfort of your own home. With our user-friendly interface getting your favorite meals has never been easier."
                techno1="HTML5"
                techno2="CSS"
                techno3="Vanila JS"
                code="https://github.com/farhanshahriyar/dhakafc"
                demo="https://dhakafcbd.netlify.app/"
                scrollY="-71%"
                icon="🛒"
                cName="reversed-proj"
              />
              <ProBox
                title="Gym Nation"
                img={Gymnation}
                description="Gym Nation is a website where people can buy their perfect gym equipment."
                techno1="ReactJS"
                techno2="CSS"
                techno3="React Icons"
                code="https://github.com/farhanshahriyar/GYM-Website-2.0"
                demo="https://gym-website-bd.netlify.app/"
                scrollY="-83%"
                icon="🏋️"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
