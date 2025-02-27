import { changeColor } from "./color_changing.js";

function initListeners() {
  $("#view--all").click(function (e) {
    // Projects section
    $(".section--projects").toggleClass("section--projects__more");
    $(".section--projects").removeClass("section--projects__original");

    // Projects Container
    $(".projects__container").toggleClass("projects__container--more");
    $(".projects__container").removeClass("projects__container--original");

    // Hidden projects
    $(".box__hidden").toggleClass("box__show");
    $(".box__hidden").removeClass("box__hidden");

    $(".box").removeClass("box__hidden");

    // Make the View All button disappear
    $("#view--all").toggleClass();
    $("#view--all").toggleClass("u-display-none");

    // Make the View Less button appear
    $("#view--less").toggleClass("u-display-none");
    $("#view--less").toggleClass(
      "btn btn--dark btn--animated projects__button"
    );
  });

  $("#view--less").click(function (e) {
    // Projects section
    $(".section--projects").toggleClass("section--projects__original");
    $(".section--projects").removeClass("section--projects__more");

    // Projects Container
    $(".projects__container").toggleClass("projects__container--original");
    $(".projects__container").removeClass("projects__container--more");

    // Hidden projects
    $(".box__show").toggleClass("box__hidden");
    $(".box__show").removeClass("box__show");

    // Make the View Less button disappear
    $("#view--less").toggleClass();
    $("#view--less").toggleClass("u-display-none");

    // Make the View All button appear
    $("#view--all").toggleClass("u-display-none");
    $("#view--all").toggleClass(
      "btn btn--yellow btn--animated projects__button"
    );
  });

  $("#sports_team_color_cycle").click(function () {
    let teams = ["Original", "Cubs", "Bengals", "Blues", "Pacers"];

    let currentSrc = $(".header__speaker").attr("src");

    for (let i = 0; i < teams.length; i++) {
      if (currentSrc.includes(teams[i])) {
        let nextIndex = (i + 1) % teams.length;
        let selectedTeam = teams[nextIndex];

        changeColor(selectedTeam);

        $(".header__speaker").attr(
          "src",
          `img/Speaker_Picture_${selectedTeam}.png`
        );

        return;
      }
    }

    $(".header__speaker").attr("src", `img/Speaker_Picture_${teams[0]}.png`);
  });
}

$(document).ready(function () {
  initListeners();

  let typed = new Typed("#typed", {
    strings: [
      "Full Stack Web Developer",
      "Software Engineer",
      "Master of Divs",
      "Your Next Hire?",
      "Code Wizard",
      "Bug Exterminator",
      "Cat Guy",
      "Lets Go Blues!",
      "Go Cubs Go!",
      "Whodey Nation!",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });
});
