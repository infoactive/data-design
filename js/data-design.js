$( document ).ready(function() {
  $(".nav-btn .open").on("click", function () {
    $(".navbar").animate({"left": "0px"}, 400);
  });
  $(".nav-btn.close").on("click", function () {
    $(".navbar").animate({"left": "-320px"}, 400);
  });
});
