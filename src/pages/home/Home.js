function Home() {
  return (
    <div>
      <header className="header">
        <div className="header__container">
          <h1 className="heading-primary">Dillon Polley</h1>

          <p className="heading-sub u-bold-text u-center-text">
            {`<Full Stack Developer />`}
          </p>

          <div className="header__buttons u-margin-top-medium">
            <a href="#section-about" className="btn btn--yellow btn--animated">
              Who Am I?
            </a>

            <a href="contact.html" className="btn btn--yellow btn--animated">
              Contact Me
            </a>
          </div>
        </div>

        <img
          className="header__speaker"
          src="../../assets/Speaker_Picture_Both.png"
          alt="Dillon with megaphone"
        />

        <div className="header__icons">
          <a href="https://twitter.com/DillonPolley">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon__light"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
            </svg>
          </a>

          <a href="https://github.com/ESSODillon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon__light"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          <a href="https://www.instagram.com/therealdillonpolley/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon__light"
              viewBox="0 0 24 24"
            >
              <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" />
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/dillon-polley-a9586418b/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon__light"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </header>

      <main>
        <section id="section-about" className="section--about">
          <h2 className="heading u-margin-bottom-small">
            Hi, I'm Dillon!
            <span className="u-underline__yellow u-underline__top"></span>
            <span className="u-underline__blue u-underline__bottom"></span>
          </h2>

          <p className="paragraph paragraph__padded paragraph__about">
            I'm an IUPUI alumni with two majors in MAS Web Development &
            Informatics, as well as a CRT in Multi-Device Development. I'm a
            total nerd for programming, learning new technologies, and finding
            ways to improve projects I've built. I primarily work in the
            Indianapolis area, where I build beautiful websites and apps.
          </p>

          <p className="paragraph paragraph__padded paragraph__about">
            I seek inspiration through developer communities, family,
            classNamemates, and friends. I enjoy playing guitar, year-round
            Christmas, cooking, and running in my free time.
          </p>
        </section>

        <section className="section--skills">
          <h2 className="heading heading__white">
            A Man of Many Hats
            <span className="u-underline__blue u-underline__top"></span>
            <span className="u-underline__yellow u-underline__bottom"></span>
          </h2>

          <p className="paragraph paragraph__padded paragraph__skills u-margin-bottom-medium">
            When I attended IUPUI, I wanted to learn as much as I possibly could
            about being a Web Dev. So I tried on several hats, in other words I
            know how to juggle:
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
                Projects I enjoy designing range from social media content,
                logos, websites for both desktop and mobile, as well as apps.
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
                A workout application for gym rats of all shapes, sizes, and
                levels of experience! View previously made workouts, or create
                your own.
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
                firestore data/file storage. Checkout upcoming boxing fights,
                and connect with world champions.
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
                candidates in the game available for marriage, and learn more
                about them.
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
                JavaScript. Themed with some of my favorite programming
                languages!
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
                Midterm project for N320 media application development.
                classNameic board game.
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
                The final project for my Intermediate Web Dev summer course of
                2019. For those with a strong desire or impulse to wander, or
                travel the world.{" "}
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
                Finance tracking application with user authentication and
                Firebase backend. Start tracking your purchases today! Defintely
                the most secure banking application ever.
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
      </main>

      <footer className="footer">
        <p className="paragraph margin u-center-text">
          Did we just become best friends? Yep. Now come say hi so we can get in
          touch!
        </p>

        <a href="contact.html" className="btn btn--dark btn--animated">
          Contact Me
        </a>

        <div className="icons__row">
          <a href="https://twitter.com/DillonPolley">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon__dark"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
            </svg>
          </a>

          <a href="https://github.com/ESSODillon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon__dark"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          <a href="https://www.instagram.com/therealdillonpolley/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon__dark"
              viewBox="0 0 24 24"
            >
              <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" />
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/dillon-polley-a9586418b/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon__dark"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </footer>

      <section className="section--copyright u-center-text">
        <p className="copyright__text">
          Copyright © 2022 Dillon Polley All Rights Reserved
        </p>
      </section>

      <script src="lib/jquery-3.5.1.min.js"></script>
      <script src="app/app.js"></script>
    </div>
  );
}

export default Home;
