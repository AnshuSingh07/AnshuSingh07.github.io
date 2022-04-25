//js for enabling night mode and day mode
var icon = document.getElementById("bg-theme");
icon.onclick = function(){
  document.body.classList.toggle("dark-mode");
  if(document.body.classList.contains("dark-mode")){
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
  else{
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}




// js for displaying animated view button
var divs = document.getElementsByClassName("project-bg");
for(let i=0;i<divs.length;i++){
    console.log(divs[i]);
    divs[i].addEventListener("mouseenter",function(){
        divs[i].querySelector(".view").classList.add("change");
    })
    divs[i].addEventListener("mouseleave",function(){
        divs[i].querySelector(".view").classList.remove("change");
    })
}





//js for displaying scroll to top button when the window is scrolled to a particular px
window.onscroll = function () {
	mytopBtn() // back to top button
};


function mytopBtn(){
    
  if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
     document.getElementById("top-button").style.display ="block";
  }
  else{
     document.getElementById("top-button").style.display ="none";
  }
}

function topFunction(){
  document.documentElement.scrollTop ="0";
}






//js for initializing aos library
AOS.init({
  offset:300,
  duration: 1000,
  easing: "ease",
  once:"true",
});



window.addEventListener("mouseup", function (event) {
  if (
    !document.getElementById("mylist").contains(event.target) &&
    !document.getElementById("menu-button").contains(event.target)
  ) {
    document.getElementById("menu-button").classList.add("collapsed");
    document.getElementById("mylist").classList.remove("in");
  }
});
