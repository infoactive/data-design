$( document ).ready(function() {
  $(".nav-open").on("click", function () {
    $(".navbar").animate({"left": "0px"}, 400);
  });
  $(".nav-close").on("click", function () {
    $(".navbar").animate({"left": "-320px"}, 400);
  });
});
