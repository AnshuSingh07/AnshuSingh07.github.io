// $("span").click(function() {
//     $("ul").slideToggle();
// });

function onclickMenu(){
    document.getElementById("mysidenav").classList.toggle("change-sidenav");
    document.getElementById("main").classList.toggle("change-main");
    document.getElementById("mysidenav").style.color="#fff";
}



window.onscroll = function()
{myFunction()};

function myFunction(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
    {
        document.getElementById("mysidenav").classList.remove("change-sidenav");
        document.getElementById("main").classList.remove("change-main");       
    }
}

