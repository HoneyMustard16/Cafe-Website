// MENU
$(".navbar-collapse a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

$(window).scroll(function () {
  if ($(".navbar").offset().top > 50) {
    $(".fixed-top").addClass("top-nav-collapse");
  } else {
    $(".fixed-top").removeClass("top-nav-collapse");
  }
});
