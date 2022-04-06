
  var menu_bar = document.getElementById("menu-bar");
  var menu_list = document.getElementById("menu-list");
  var feature = document.getElementById("feature");

//   function caret(){
//     console.log(feature);
//     console.log(feature.style.display);
//       if(feature.style.display == "none"){
//          feature.style.display="block";
//       }
//       else{
//           feature.style.display="none";
//       }
//       console.log(feature.style.display);
//   }

  function caret(){
      if (document.window.width <=768 ){
        feature.classList.toggle("change-feature");
      }
    
  }

  function menuBar(){
    if (document.window.width <=768 ){
        menu_bar.classList.toggle("icon");
        menu_list.classList.toggle("change-menulist");
      }
  }



//owl carousel starts here

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      rtl:false,
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }});
  });
  //owl carousel ends here
