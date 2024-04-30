import NavBar from "./NavBar";
import HomePage from "./HomePage";
import RecipePage from "./RecipePage";
import Gallery from "./Gallery";
import AboutMe from "./About_Me";
import Contact from "./Contact";
import { useState } from "react";
import KitchenTools from "./KitchenTools";

function LandingPage() {
  const [activePage, setActivePage] = useState("Home");
  const handlePageChange = (page) => {
    setActivePage(page);
  };
  return (
    <div className="container">
      <div className="header-container">
        <div className="instagram-logo">
          <a href="http://www.instagram.com">
            <img src="./instagram.webp" />
          </a>
        </div>
        <div className="facebook-logo">
          <a href="https://www.facebook.com/">
            <img src="./facebook.webp" />
          </a>
        </div>
        <div className="twitter-logo">
          <a href="http://www.twitter.com">
            <img src="./twitter.webp" />
          </a>
        </div>
        <div className="title">
          <p className="title-text">savor & cravé</p>
          <p className="sub-title">A Culinary Journey</p>
        </div>

        <img className="news-letter-logo" src="./newsletter.webp" />
        <a href="www.google.com" />
        <p className="subscribe">Subscribe</p>

        {/* <div className="search-bar">
          <img src="./search.webp" />
        </div> */}
      </div>

      <NavBar active={activePage} onNavigate={handlePageChange} />
      {activePage === "Home" && <HomePage />}
      {activePage === "Recipes" && <RecipePage />}
      {activePage === "Gallery" && <Gallery />}
      {activePage === "Kitchen Tools" && <KitchenTools />}
      {activePage === "About Me" && <AboutMe />}
      {activePage === "Contact" && <Contact />}
    </div>
  );
}

export default LandingPage;
