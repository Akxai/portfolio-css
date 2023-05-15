const body = document.querySelector("body");
const sliderInput = document.querySelector("#slider-input");
const allBoxes = document.querySelectorAll(".box");
const allPills = document.querySelectorAll(".pill");
const allHiddenPills = document.querySelectorAll(".hidden-pill");
const allArrows = document.querySelectorAll(".arrow");
const expandPill = document.querySelector("#expand");
const xLetterPath = document.querySelector("#x-letter");
const xLetterSVG = document.querySelector("#x-letter-svg");
const xBox = document.querySelector(".x-box");
const socialFan = document.querySelector(".social-fan");
const reversePill = document.querySelector("#reverse");
const boxContainer = document.querySelector(".box-container");
const iconPath = document.querySelector("#icon");
const hiddenBox = document.querySelector(".hidden-box");
const textBox = document.querySelector(".hidden-box .text-box");

let paletteIndex = 0;
const socialFanIndex = 1;
const xLetterIndex = 11;
const rotateIconIndex = 3;

xLetterSVG.style.fill = colorPalettes[paletteIndex][xLetterIndex].fill;
allPills.forEach(
  (pill, i) =>
    (pill.style.backgroundColor = colorPalettes[paletteIndex][i].fill)
);

allHiddenPills.forEach(
  (hiddenPill) =>
    (hiddenPill.style.backgroundColor =
      colorPalettes[paletteIndex][socialFanIndex].fill)
);

const expand = () => {
  if (hiddenBox.clientWidth !== 0) {
    textBox.classList.add("hidden");
    setTimeout(() => (hiddenBox.style.width = "0px"), 200);
    // hiddenBox.style.width = "0px";
  } else {
    hiddenBox.style.width = "1700px";
    setTimeout(() => textBox.classList.remove("hidden"), 500);
  }
};

expandPill.addEventListener("click", expand);

const reverse = () => {
  if (boxContainer.style.flexWrap === "wrap") {
    boxContainer.style.flexWrap = "wrap-reverse";
  } else {
    boxContainer.style.flexWrap = "wrap";
  }
};

reversePill.addEventListener("click", reverse);

const addTheme = (
  bodyBackgroundColor,
  strokeWidth,
  svgFill,
  opacity,
  lineColor,
  borderRadius,
  boxBackgroundColor,
  pillBackgroundColor
) => {
  body.style.backgroundColor = bodyBackgroundColor;
  xLetterPath.style.strokeWidth = strokeWidth;
  xLetterSVG.style.fill =
    svgFill || colorPalettes[paletteIndex][xLetterIndex].fill;
  xLetterSVG.style.opacity = opacity;
  xBox.style.backgroundColor =
    boxBackgroundColor || colorPalettes[paletteIndex][xLetterIndex].fill;
  iconPath.style.stroke =
    lineColor || colorPalettes[paletteIndex][rotateIconIndex].altStroke;
  iconPath.style.strokeWidth = strokeWidth;

  allBoxes.forEach(
    (box, i) =>
      (box.style.backgroundColor =
        boxBackgroundColor || colorPalettes[paletteIndex][i].fill)
  );

  allPills.forEach((pill, i) => {
    pill.style.opacity = opacity;
    pill.style.backgroundColor =
      pillBackgroundColor || colorPalettes[paletteIndex][i].fill;
    pill.style.borderWidth = strokeWidth;
    pill.style.borderColor =
      lineColor || colorPalettes[paletteIndex][i].altStroke;
    pill.style.borderBlockStyle = "solid";
    pill.style.borderRadius = borderRadius;
  });

  allHiddenPills.forEach((hiddenPill) => {
    hiddenPill.style.opacity = opacity;
    hiddenPill.style.borderWidth = strokeWidth;
    hiddenPill.style.backgroundColor =
      pillBackgroundColor || colorPalettes[paletteIndex][socialFanIndex].fill;
    hiddenPill.style.borderColor =
      lineColor || colorPalettes[paletteIndex][socialFanIndex].altStroke;
    hiddenPill.style.borderRadius = borderRadius;
  });

  allArrows.forEach((arrow) => {
    arrow.style.borderBlockStyle = "solid";
    arrow.style.borderColor = lineColor;
    arrow.style.borderWidth = "0 " + strokeWidth + " " + strokeWidth + " 0";
    arrow.style.opacity = opacity;
  });
};

const moveSlider = () => {
  const sliderInput = document.querySelector("#slider-input");
  const sliderValue = sliderInput.value;
  if (sliderValue == 0) {
    addTheme(
      "white",
      "12px",
      null,
      1,
      "rgb(38, 38, 38)",
      "100px",
      "white",
      null
    );
  }
  if (sliderValue > 1 && sliderValue <= 3) {
    addTheme("white", "2px", "white", 0.5, null, "75px", null, "white");
  }
  if (sliderValue >= 4 && sliderValue <= 6) {
    addTheme("white", "1px", "white", 0.5, null, "90px", null);
  }
  if (sliderValue >= 7 && sliderValue < 9) {
    addTheme(
      "white",
      "2px",
      "white",
      0.5,
      "rgb(38,38,38)",
      "50px",
      null,
      "white"
    );
  }
  if (sliderValue == 10) {
    addTheme(
      "rgb(38,38,38)",
      "12px",
      "white",
      1,
      "black",
      0,
      "transparent",
      "white"
    );
  }
};

sliderInput.addEventListener("input", moveSlider);

const changePalette = () => {
  xLetterPath.classList.add("pulse");
  if (paletteIndex >= 2) {
    paletteIndex = 0;
  } else {
    paletteIndex++;
  }
  moveSlider();
  setTimeout(() => xLetterPath.classList.remove("pulse"), 500);
};

xBox.addEventListener("click", changePalette);

const profils = document.querySelectorAll("#profil");

sliderInput.addEventListener("input", function () {
  const sliderValue = sliderInput.value;
  if (sliderValue == 10) {
    profils.forEach((profil) => {
      profil.attributes.colors.nodeValue =
        "outline:#121331,primary:black,secondary:black";
    });
  } else {
    profils.forEach((profil) => {
      // Assign the original colors to the attributes
      profil.attributes.colors.nodeValue =
        "outline:#121331,primary:#121331,secondary:#ffc738,tertiary:#4bb3fd,quaternary:#ffc738,quinary:#f9c9c0";
    });
  }
});
