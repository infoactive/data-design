$( document ).ready(function() {
  $(".btn .open").on("click", function () {
    $(".navbar").animate({"left": "0px"}, 400);
  });
  $(".btn.close").on("click", function () {
    $(".navbar").animate({"left": "-320px"}, 400);
  });
});
