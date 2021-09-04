
//getting img1 ,img2 , button
var image1 = document.getElementsByClassName("img1")[0];
var image2 = document.getElementsByClassName("img2")[0];
var rollButton = document.querySelector("button");

rollButton.addEventListener("click",diceRoll);
//function to roll dice
 function diceRoll(){
   //adding rotate animation
   image1.classList.add("rotate");
   image2.classList.add("rotate");

   //chnaging image to show value 1 to 6 for image1
  var randomNumber1 = Math.floor(Math.random() * 6 + 1);
  var randomImageSource1 = "images/dice"+randomNumber1+".png";
  image1.setAttribute("src" , randomImageSource1);
 //chnaging image to show value 1 to 6 for image2
  var randomNumber2 = Math.floor(Math.random() * 6 + 1);
  var randomImageSource2 = "images/dice"+randomNumber2+".png";
  image2.setAttribute("src" , randomImageSource2);

/*providing dealy so that class .rotate get added and get removed after 300 miliecond
so our dice will rotate every time button get clicked*/
  setTimeout(function(){
    image1.classList.remove("rotate");
    image2.classList.remove("rotate");
  },300);



}
