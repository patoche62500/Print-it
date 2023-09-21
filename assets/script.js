const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const leftarrow = document.getElementsByClassName("arrow_left");
const rightarrow = document.getElementsByClassName("arrow_right");
const containerdot = document.getElementsByClassName("dots");
let currentslide = 0;
let oldslide = 0;

leftarrow[0].addEventListener("click", left);
rightarrow[0].addEventListener("click", right);

function teste() {
  console.log("click");
}

function left() {
  console.log("arrow left");

  if (currentslide != 0) {
    oldslide = currentslide;
    currentslide--;
  } else {
    oldslide = 0;
    currentslide = slides.length - 1;
  }

  selecteur();

  console.log(currentslide);
  console.log(oldslide);
}

function right() {
  console.log("arrow right");

  if (currentslide != slides.length - 1) {
    oldslide = currentslide;
    currentslide++;
  } else {
    oldslide++;
    currentslide = 0;
  }

  selecteur();

  console.log(currentslide);
  console.log(oldslide);
}

slides.forEach((Element) => {
  const dot = document.createElement("div");
  if (Element == slides[0]) {
    dot.className = "dot dot_selected";
  } else {
    dot.className = "dot";
  }

  containerdot[0].appendChild(dot);
});

function selecteur() {
  const element = document.getElementsByClassName("dot");
  element[currentslide].className = "dot dot_selected";
  element[oldslide].className = "dot";
  let image = document.querySelector(".banner-img");
  image.src = "./assets/images/slideshow/" + slides[currentslide].image;
  let texte = document.querySelector("p");
  texte.innerHTML = slides[currentslide].tagLine;
}
