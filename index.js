var image1 = document.getElementsByClassName("img1")[0];
var image2 = document.getElementsByClassName("img2")[0];

function diceRoll() {
  image1.classList.add("rotate");
  image2.classList.add("rotate");


  switch (Math.floor(Math.random() * 6 + 1)) {
    case 1:
      image1.src = "images/dice1.png";
      break;
    case 2:
      image1.src = "images/dice2.png";
      break;
    case 3:
      image1.src = "images/dice3.png";
      break;
    case 4:
      image1.src = "images/dice4.png";
      break;
    case 5:
      image1.src = "images/dice5.png";
      break;
    case 6:
      image1.src = "images/dice6.png";
      break;
    default:

  }

  switch (Math.floor(Math.random() * 6 + 1)) {
    case 1:
      image2.src = "images/dice1.png";
      break;
    case 2:
      image2.src = "images/dice2.png";
      break;
    case 3:
      image2.src = "images/dice3.png";
      break;
    case 4:
      image2.src = "images/dice4.png";
      break;
    case 5:
      image2.src = "images/dice5.png";
      break;
    case 6:
      image2.src = "images/dice6.png";
      break;
    default:

  }
}

function refreshRoll() {
  image1.classList.remove("rotate");
  image2.classList.remove("rotate");
}
