import VentureShop from "../images/VentureShop-FullView.png";
import DhakaFC from "../images/DhakaFC-FullView.png";
import ProBox from "./ProBox.jsx";
//import FoodiesWebApp from "../images/FoodiesWebsite-Full.png";
import HyperTouch from "../images/HyperTouch-fulllview.png";
//import Gymnation from "../images/GymNation.png"
import Deliveryooo from "../images/Deliveryoo Web.png"
import TaxiUp from "../images/screencapture-localhost-3000-2024-11-24-21_54_08 (1).png"
import Eatgood from "../images/EATBEST.png"
import Wander from "../images/Wanderventure.png"
import Residence from "../images/Residence.png"

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
               id={1}
               title="Residence"
                img={Residence}
                description="Let s hunt for your dream residence
Explore our range of beautiful properties with the addition of separate accommodation suitable for you."
                techno1="React Js"
                techno2="Tailwind CSS"
                code="https://github.com/arifurrahmansajid/Residence"
                demo="https://residence-three.vercel.app/"
                scrollY="-83%"
                icon="🏠"
 
              /> 
            
              <ProBox
                id={2}
                title="WanderVenture"
                img={Wander}
                description="WanderVenture is a user-friendly online travel and tourism management website that is very helpful in finding your dream spot to visit. 
                "
                techno1="ReactJS"
                techno2="NodeJS"
                code="https://github.com/arifurrahmansajid/WanderVenture"
                demo="https://effortless-semolina-2fc164.netlify.app"
                scrollY="-74%"
                icon="✈️"

              />
           {/*   <ProBox
                title="TaxiUp"
                img={TaxiUp}
                description="A NextJs Sass Project for taxi driver made with NextJs and Tailwindcss. 
                "
                techno1="NextJs"
                techno2="Tailwindcss"
                code="https://github.com/arifurrahmansajid/TaxiUp"
                demo="https://taxi-up-sigma.vercel.app/"
                scrollY="-74%"
                icon="🚗"

              />    

           */}

              <ProBox
                id={3}
                title="Deliveryooo"
                img={Deliveryooo}
                description="Deliveryoo is the most trusted community-fueled platform that provides one convenient app for ride-sharing, food delivery, parcel & courier services in Bangladesh. 
                "
                techno1="ReactJS"
                techno2="CSS"
                code="https://github.com/arifurrahmansajid/Deliveryoo"
                demo="https://deliveryoobd.netlify.app/"
                scrollY="-74%"
                icon="🚚"
              //cName="reversed-proj"
              />

              {/*  <ProBox
               title="Foodies E-Commerce"
                img={FoodiesWebApp}
                description=""
                techno1="HTML5"
                techno2="CSS"
                techno3="Vanila JS"
                code="https://github.com/arifurrahmansajid/foodies-main"
                demo="https://foodiesbd.netlify.app/"
                scrollY="-83%"
                icon="🛒"
 
              /> 
*/}
              <ProBox
                id={4}
                title="Eat the best"
                img={Eatgood}
                description="Foodies is a site dedicated to quick meals. This shop has a wide selection of tasty salads and other dishes."
                techno1="HTML"
                techno2="CSS"
                techno3="React Icons"
                code="https://github.com/arifurrahmansajid/Food-website?tab=readme-ov-file"
                demo="https://stately-nougat-dc92ba.netlify.app"
                scrollY="-83%"
                icon="🍔"
              />
{/* 
              <ProBox
                title="HyperTouch"
                img={HyperTouch}
                description="HyperTouch is a Website where people can buy their perfect cloths, shoes and others."
                techno1="React"
                techno2="CSS"
                techno3="Material UI"
                techno4="SC"
                code="https://github.com/arifurrahmansajid/HyperTouch"
                demo="https://hypertouch.netlify.app/"
                scrollY="-74%"
                icon="🚗"

              />
              <ProBox
                id={5}
                title="VentureShop"
                img={VentureShop}
                description="Venture Shop web app is a React-based e-commerce site featuring anonymous login, sign-up, cart, wishlist, and more. Firebase was utilized for all of the above, plus file storage, user authentication, and product information."
                techno1="ReactJS"
                techno2="CSS"
                techno3="Firebase"
                techno4="Material UI"
                code="https://github.com/arifurrahmansajid/Venture-Shop"
                demo="https://ventureshop.netlify.app/"
                scrollY="-89%"
                icon="🛒"
              />
 */} 
              <ProBox
                id={6}
                title="DhakaFC Restro "
                img={DhakaFC}
                description="DhakaFC is a responsive Fast Food website,  noodles, burgers, chicken and more from the comfort of your own home."
                techno1="HTML5"
                techno2="CSS"
                techno3="Vanila JS"
                code="https://github.com/arifurrahmansajid/dhakafc"
                demo="https://dhakafcbd.netlify.app/"
                scrollY="-71%"
                icon="🛒"

              />
             
          


            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
