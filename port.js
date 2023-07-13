const modes = document.getElementById('btn');

modes.addEventListener("click",modeChange);

function modeChange(){

    document.getElementById("body").style.backgroundColor="black";
    // document.getElementsByTagName("p").style.color="white";
    document.getElementById("body").style.color="white";
    document.getElementById("main").style.backgroundColor="black";
    document.getElementsByClassName('welcome-section')[0].style.color="white";
    
    modes.innerHTML = "light";
   
  

}





  
 

