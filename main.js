// Kung Fu Panda Slideshow / Gallery

// global variable
let imgPaths = [
  "po.png",
  "tigress.png",
  "viper.png",
  "monkey.png",
  "mantis.png",
  "crane.png",
];

// create image gallery
for (var i = 0; i < imgPaths.length; i++) {
  console.log(i);
  document.getElementById(
    "img-container"
  ).innerHTML += `<img src="images/${imgPaths[i]}">`;
}
