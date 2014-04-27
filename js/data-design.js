$( document ).ready(function() {
  $(".btn.open").on("click", function () {
    $(".navbar").animate({"left": "0px"}, 400);
  });
  $(".btn.close").on("click", function () {
    $(".navbar").animate({"left": "-320px"}, 400);
  });

  $("nav.toc li[data-type='part']").on("click", function(e) {
    $(this).find('> ol').slideToggle();
  });

  currentChapter = $("header h1").text();
  $("nav.toc li a:contains(" + currentChapter + ")").closest('ol').css("display", "block");
  $("nav.toc li a:contains(" + currentChapter + ")").closest('li').addClass("active");

});
