import React from "react";
import welcomeImage from "../../images/welcome.jpg";

const WelcomePage = () => {
  return (
    <section className="section-welcome">
      <h2 className="section-welcome__title">welcome to the shop</h2>
      <h3 className="section-welcome__subtitle">
        we invite you to check our product offer
      </h3>
      <div className="section-welcome__box-image">
        <img
          src={welcomeImage}
          alt="welcome page"
          className="section-welcome__image"
        />
      </div>
    </section>
  );
};

export default WelcomePage;
