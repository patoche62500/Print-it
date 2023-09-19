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

leftarrow[0].addEventListener("click", left);
rightarrow[0].addEventListener("click", right);

function teste() {
  console.log("click");
}

function left(){
	console.log("arrow left");
}

function right(){
	console.log("arrow right");
}