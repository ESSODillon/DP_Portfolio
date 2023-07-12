import React from "react";

function ProjectsSection() {
  return (
    <section className="section--projects section--projects__original u-margin-bottom-medium">
      <h2 className="heading u-margin-bottom-small">
        My Work
        <span className="u-underline__yellow u-underline__top"></span>
        <span className="u-underline__blue u-underline__bottom"></span>
      </h2>

      <div
        id="projects"
        className="projects__container projects__container--original"
      >
        <div className="box box__yellow box__small">
          <h3 className="heading__small">Natours</h3>

          <p className="box__text">
            Travel across the globe, touring the most beautiful places that
            nature has to offer.
          </p>

          <a
            href="https://essodillon.github.io/Natours/"
            className="btn btn--blue btn--animated box__button u-margin-top-medium"
          >
            Visit Site
          </a>
        </div>

        <div className="box box__blue box__small">
          <h3 className="heading__small">Total Titans</h3>

          <p className="box__text">
            A workout application for gym rats of all shapes, sizes, and levels
            of experience! View previously made workouts, or create your own.
          </p>

          <a
            href="https://essodillon.github.io/Total_Titans/"
            className="btn btn--yellow btn--animated box__button u-margin-top-medium"
          >
            Visit Site
          </a>
        </div>

        <div className="box box__yellow box__small">
          <h3 className="heading__small">Trillo</h3>

          <p className="box__text">
            Want to get away with some friends or family on a holiday?{" "}
          </p>

          <a
            href="https://essodillon.github.io/Trillo/"
            className="btn btn--blue btn--animated box__button u-margin-top-medium"
          >
            Visit Site
          </a>
        </div>

        <div className="box box__blue box__large">
          <h3 className="heading__small">Fight Life</h3>

          <p className="box__text">
            React single page application with Firebase authentication and
            firestore data/file storage. Checkout upcoming boxing fights, and
            connect with world champions.
          </p>

          <a
            href="https://fightlife-3373d.web.app/"
            className="btn btn--yellow btn--animated box__button u-margin-top-medium"
          >
            Visit Site
          </a>
        </div>

        <div className="box box__yellow box__large">
          <h3 className="heading__small">SV Marriage Cards</h3>

          <p className="box__text">
            Fans of Stardew Valley, this ones for you! Checkout all the
            candidates in the game available for marriage, and learn more about
            them.
          </p>

          <a
            href="https://essodillon.github.io/SV_MarriageCards/"
            className="btn btn--blue btn--animated box__button u-margin-top-medium"
          >
            Visit Site
          </a>
        </div>

        <div className="box box__blue box__small box__hidden">
          <h3 className="heading__small">Nexter</h3>

          <p className="box__text">
            All the luxury homes you've ever dreamed of fresh on the market.
          </p>

          <a
            href="https://essodillon.github.io/Nexter/"
            className="btn btn--yellow btn--animated box__button u-margin-top-medium"
          >
            Visit Site
          </a>
        </div>

        <div id="hidden" className="box box__yellow box__small box__hidden">
          <h3 className="heading__small">Developer Match</h3>

          <p className="box__text">
            A fun little matching game with CSS animations, built with React
            JavaScript. Themed with some of my favorite programming languages!
          </p>

          <a
            href="https://essodillon.github.io/Developer-Match/"
            className="btn btn--blue btn--animated box__button u-margin-top-medium"
          >
            Visit Site
          </a>
        </div>

        <div id="hidden" className="box box__blue box__small box__hidden">
          <h3 className="heading__small">Connect 4</h3>

          <p className="box__text">
            Midterm project for N320 media application development. classNameic
            board game.
          </p>

          <a
            href="https://essodillon.github.io/Connect4/index.html"
            className="btn btn--yellow btn--animated box__button u-margin-top-medium"
          >
            Visit Site
          </a>
        </div>

        <div id="hidden" className="box box__yellow box__large box__hidden">
          <h3 className="heading__small">Travel-Fly</h3>

          <p className="box__text">
            The final project for my Intermediate Web Dev summer course of 2019.
            For those with a strong desire or impulse to wander, or travel the
            world.{" "}
          </p>

          <a
            href="https://essodillon.github.io/Travel-Fly/index.html"
            className="btn btn--blue btn--animated box__button u-margin-top-medium"
          >
            Visit Site
          </a>
        </div>

        <div id="hidden" className="box box__blue box__large box__hidden">
          <h3 className="heading__small">My Money</h3>

          <p className="box__text">
            Finance tracking application with user authentication and Firebase
            backend. Start tracking your purchases today! Defintely the most
            secure banking application ever.
          </p>

          <a
            href="https://mymoney-d5e4b.web.app"
            className="btn btn--yellow btn--animated box__button u-margin-top-medium"
          >
            Visit Site
          </a>
        </div>
      </div>

      <a
        id="view--all"
        className="btn btn--yellow btn--animated projects__button"
      >
        View All
      </a>

      <a id="view--less" className="u-display-none">
        View Less
      </a>
    </section>
  );
}

export default ProjectsSection;
