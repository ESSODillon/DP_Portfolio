import React from "react";
import SpeakerPictureBoth from "../../assets/Speaker_Picture_Both.png";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="heading-primary">Dillon Polley</h1>

        <p className="heading-sub u-bold-text u-center-text">
          {"<Full Stack Developer />"}
        </p>

        <div className="header__buttons u-margin-top-medium">
          <a href="#section-about" className="btn btn--yellow btn--animated">
            Who Am I?
          </a>

          <a href="/contact" className="btn btn--yellow btn--animated">
            Contact Me
          </a>
        </div>
      </div>

      <img
        className="header__speaker"
        src={SpeakerPictureBoth}
        alt="Dillon with megaphone"
      />

      <div className="header__icons">{/* Icon links */}</div>
    </header>
  );
}

export default Header;
