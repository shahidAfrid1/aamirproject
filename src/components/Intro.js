import React from "react";
import ProfilePhoto from "../images/aamir.jpg";
import FacebookPhoto from "../images/facebook.png";
import InstaPhoto from "../images/instagram.png";
import "../styles/intro.css"
export const Intro = () => {
  return (
    <main>
      <h1>
        <span>Ar</span>Shayari
      </h1>
      <div className="hero">
        <div className="profile">
          <img src={ProfilePhoto} alt="Aamir" />
        </div>
        <div className="description">
          <p className="text">"Mein shayar nahi hota, Agar tum meri hoti"</p>
          <p className="title">~ Mr. Ar</p>
          <div className="social-links">
            <div className="link-image">
              <a
                href="https://www.facebook.com/profile.php?id=100088674026516&mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer"
              >
                <img src={FacebookPhoto} alt="facebook"></img>
              </a>
            </div>
            <div className="link-image">
              <a
                href="https://www.instagram.com/ar_shayaris/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={InstaPhoto} alt="insta"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Intro;
