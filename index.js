var name= prompt("What Is Your Good Name ? ");
var name1= name.slice(0,1).toUpperCase()+name.slice(1,name.length).toLowerCase();
alert("Hey "+ name1 + " Great To see you 😇");



var number=document.querySelectorAll(".drum").length;


for(i=0 ; i<number ; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
// detecting button press

 var buttonInnerHTML = this.innerHTML;

makesound(buttonInnerHTML);
recentbutton(buttonInnerHTML);
});

}


// detecting keyboard press

document.addEventListener("keypress", function(event) {
  makesound(event.key);
  recentbutton(event.key);
});

function makesound(key){
  switch (key){
    case "W":
      var audio=new Audio("WAJAH_TUM_HO_.mp3");
        audio.play();
    break;

    case "K":

      var audio1=new Audio("Kabhi Aayine Pe.mp3");
      audio1.play();
      break;


    case "C":

      var audio2=new Audio("chahunmainyaana.mp3");
      audio2.play();

    break;


    case "E":

      var audio3=new Audio("Ek_Din_Teri_Raahon.mp3");
      audio3.play();
    break;


    case "H":

      var audio4=new Audio("Hale_Dil.mp3")
      audio4.play();
    break;

    case "J":

      var audio5=new Audio("Butterfly.mp3");
      audio5.play();
    break;

    case "T":

      var audio6=new Audio("Tum Hi Ho_.mp3");
      audio6.play();

    break;

    case "L" :
    var audio14=new Audio("Laapata.mp3");
    audio14.play();
    break;

    case "B":
    var audio15=new Audio("BurjKhalifa.mp3");
    audio15.play();
    break;

// key section

    case "w":
     alert(events + " have got clicked ")
      var audio7=new Audio("WAJAH_TUM_HO_.mp3");
        audio7.play();
    break;

    case "k":

      var audio8=new Audio("Kabhi Aayine Pe.mp3");
      audio8.play();
      break;


    case "c":

      var audio9=new Audio("chahunmainyaana.mp3");
      audio9.play();

    break;


    case "e":

      var audio10=new Audio("Ek_Din_Teri_Raahon.mp3");
      audio10.play();
    break;


    case "h":

      var audio11=new Audio("Hale_Dil.mp3")
      audio11.play();
    break;

    case "j":

      var audio12=new Audio("Butterfly.mp3");
      audio12.play();
    break;





    case "t":

      var audio13=new Audio("Tum Hi Ho_.mp3");
      audio13.play();

    break;

    case "l":
    var audio16=new Audio("Laapata.mp3");
    audio16.play();
    break;

    case "b":
    var audio17=new Audio("BurjKhalifa.mp3");
    audio17.play();
    break;

    case "N":


    var audio15=new Audio("BurjKhalifa.mp3");

    audio15.pause();

    break;

    default : alert("wrong entry");
  }

}

function recentbutton(activekey){
   var activebutton=  document.querySelector("."+activekey);
   activebutton.classList.add("pressed");
   setTimeout(function() {
     activebutton.classList.remove("pressed");
   },100);
 }
