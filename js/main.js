
// isotop gallery

   // init Isotope
   var $grid = $("#container").isotope({
     // options
   });
   // filter items on button click
   $("ul.portfolio-button").on("click", "li", function () {
     var filterValue = $(this).attr("data-filter");
     $grid.isotope({ filter: filterValue });
   });

   $("ul.portfolio-button li").click(function () {
     $(this).addClass("active");
     $(this).siblings().removeClass("active");
   });
 

//    owl carousel
 
   $(".owl-carousel").owlCarousel({
     loop: false,
     margin: 10,
     nav: false,
     dots: true,
     responsive: {
       0: {
         items: 1,
       },
       600: {
         items: 1,
       },
       1000: {
         items: 1,
       },
     },
   });


// aos library

   AOS.init({
     duration: 2000,
   });
