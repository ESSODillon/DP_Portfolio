import React from "react";

function AboutSection() {
  return (
    <section id="section-about" className="section--about">
      <h2 className="heading u-margin-bottom-small">
        Hi, I'm Dillon!
        <span className="u-underline__yellow u-underline__top"></span>
        <span className="u-underline__blue u-underline__bottom"></span>
      </h2>

      <p className="paragraph paragraph__padded paragraph__about">
        I'm an IUPUI alumni with two majors in MAS Web Development &
        Informatics, as well as a CRT in Multi-Device Development. I'm a total
        nerd for programming, learning new technologies, and finding ways to
        improve projects I've built. I primarily work in the Indianapolis area,
        where I build beautiful websites and apps.
      </p>

      <p className="paragraph paragraph__padded paragraph__about">
        I seek inspiration through developer communities, family,
        classNamemates, and friends. I enjoy playing guitar, year-round
        Christmas, cooking, and running in my free time.
      </p>
    </section>
  );
}

export default AboutSection;