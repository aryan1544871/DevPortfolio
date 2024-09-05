import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-image-div">
          <img
  className="responsive-image"
  alt="Aryan's Image"
  src={require("../../assets/images/PortfolioImg.png")}
/>

{/* CSS to control the image size */}
<style jsx>{`
  .responsive-image {
    border-radius: 50%;
    opacity: 0.95;
    border: 0.5px solid white;
    width: 400px;
    height: 500px;
    max-width: 400px; /* Default for larger screens */
  }

  @media (max-width: 640px) {
    .responsive-image {
      max-width: 300px; /* Smaller size for mobile */
      height: 100px;
      width: 300px;
      margin-left:20px;
      margin-top:20px; /* Maintain aspect ratio */
    }
  }
`}</style>


          </div>
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                {greeting.resumeLink && (
                  <a
                    href={require("./resume.pdf")}
                    download="Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
