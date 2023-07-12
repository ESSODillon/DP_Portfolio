import React from "react";

function SkillsSection() {
  return (
    <section className="section--skills">
      <h2 className="heading heading__white">
        A Man of Many Hats
        <span className="u-underline__blue u-underline__top"></span>
        <span className="u-underline__yellow u-underline__bottom"></span>
      </h2>

      <p className="paragraph paragraph__padded paragraph__skills u-margin-bottom-medium">
        When I attended IUPUI, I wanted to learn as much as I possibly could
        about being a Web Dev. So I tried on several hats, in other words I know
        how to juggle:
      </p>

      <div className="skills__container">
        <div className="box__blue">
          <h2 className="heading__medium u-center-text u-margin-bottom-medium">
            Web Design
          </h2>

          <p className="box__text u-margin-bottom-small">
            Design has always been a great passion of mine, and I'm always
            learning about new ways to think and plan my projects.
          </p>

          <p className="box__text u-margin-bottom-small">
            Projects I enjoy designing range from social media content, logos,
            websites for both desktop and mobile, as well as apps.
          </p>

          <p className="box__text u-bold-text u-margin-bottom-small">
            Design tools:
          </p>

          <p className="box__text">Adobe Xd</p>
          <p className="box__text">Photoshop</p>
          <p className="box__text">Pencil and Notebook</p>
        </div>

        <div className="box__yellow">
          <h2 className="heading__medium u-center-text u-margin-bottom-medium">
            Front End
          </h2>

          <p className="box__text u-margin-bottom-small">
            Front-end development is personally my favorite part of web
            development. It takes the unlimited creative freedom that design
            gives you, and lets you build that idea.
          </p>

          <p className="box__text u-bold-text u-margin-bottom-small">
            Languages:
          </p>

          <p className="box__text u-margin-bottom-small">
            HTML5, CSS3, Sass, JavaScript, TypeScript.
          </p>

          <p className="box__text u-bold-text u-margin-bottom-small">
            Libraries and Frameworks:
          </p>

          <p className="box__text u-margin-bottom-small">
            React, Nodejs, jQuery.
          </p>
        </div>

        <div className="box__blue">
          <h2 className="heading__medium u-center-text u-margin-bottom-medium">
            Back End
          </h2>

          <p className="box__text u-margin-bottom-small">
            I picked up back end development to make me a more well rounded
            developer, and to make the jump to being full stack.
          </p>

          <p className="box__text u-bold-text u-margin-bottom-small">
            Languages and Tools:
          </p>

          <p className="box__text u-margin-bottom-small">
            PHP, Python, MySQL, Postman and Firebase.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
