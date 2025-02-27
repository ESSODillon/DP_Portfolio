// create a exportable function that changes the color of the background
// based on the team selected

const changeColor = (team) => {
  let colorThemes = {
    Original: {
      "--color-primary": "#f1c40f",
      "--color-primary-dark": "#ae8d0a",
      "--color-primary-light": "#f6d965",
      "--color-secondary": "#2c3e50",
      "--color-secondary-dark": "#1c2833",
      "--color-secondary-light": "#34495e",
    },
    Cubs: {
      "--color-primary": "#cc3433",
      "--color-primary-dark": "#08245b",
      "--color-primary-light": "#2d4d9d",
      "--color-secondary": "#0e3386",
      "--color-secondary-dark": "#a61c18",
      "--color-secondary-light": "#e55654",
    },
    Bengals: {
      "--color-primary": "#fb4f14",
      "--color-primary-dark": "#c73c0f",
      "--color-primary-light": "#ff6a3b",
      "--color-secondary": "#000000",
      "--color-secondary-dark": "#000000",
      "--color-secondary-light": "#000000",
    },
    Blues: {
      "--color-primary": "#002f87",
      "--color-primary-dark": "#001d57",
      "--color-primary-light": "#0046b8",
      "--color-secondary": "#ffb310",
      "--color-secondary-dark": "#00122b",
      "--color-secondary-light": "#053c73",
    },
    Pacers: {
      "--color-primary": "#002d62",
      "--color-primary-dark": "#001b41",
      "--color-primary-light": "#00408c",
      "--color-secondary": "#fdbb30",
      "--color-secondary-dark": "#c99a2e",
      "--color-secondary-light": "#ffcc4d",
    },
  };

  $(".btn--yellow")
    .css("background-color", colorThemes[team]["--color-primary"])
    .css("color", colorThemes[team]["--color-secondary"]);

  $(".btn--blue")
    .css("background-color", colorThemes[team]["--color-secondary"])
    .css("color", colorThemes[team]["--color-primary"]);

  $(".btn--dark")
    .css("background-color", colorThemes[team]["--color-primary"])
    .css("color", colorThemes[team]["--color-secondary"]);

  $(".box__yellow").css(
    "border",
    `5px solid ${colorThemes[team]["--color-primary"]}`
  );

  $(".box__blue").css(
    "border",
    `5px solid ${colorThemes[team]["--color-secondary"]}`
  );

  $(".u-underline__blue").css(
    "background-color",
    `${colorThemes[team]["--color-primary"]}`
  );

  $(".u-underline__yellow").css(
    "background-color",
    `${colorThemes[team]["--color-secondary"]}`
  );

  $(".footer").css(
    "background-color",
    `${colorThemes[team]["--color-secondary"]}`
  );

  $(".section--copyright").css(
    "background-color",
    `${colorThemes[team]["--color-primary"]}`
  );
};

export { changeColor };
