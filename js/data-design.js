$( document ).ready(function() {
  $(".btn.open").on("click", function () {
    $(".navbar").animate({"left": "0px"}, 400);
  });
  $(".btn.close").on("click", function () {
    $(".navbar").animate({"left": "-320px"}, 400);
  });

  $("nav[data-type='toc'] li[data-type='part']").on("click", function(e) {
    $(this).find('> ol').slideToggle();
    $(this).toggleClass('open');
  });

  if (!$("div[data-type='part']")[0]) {
    currentChapter = $("header h1").text();
    $("nav[data-type='toc'] li a:contains(" + currentChapter + ")").closest('ol').css("display", "block");
    $("nav[data-type='toc'] li a:contains(" + currentChapter + ")").closest('li').addClass("active");
    $("nav[data-type='toc'] li a:contains(" + currentChapter + ")").closest('li[data-type="part"]').addClass("open");
  }

});

document.addEventListener('keydown', function(event) {
  if(event.keyCode == 37) { // Left arrow key pressed
      $('#previous_page').children()[0].click(); // Click the previous link button
  }
  else if(event.keyCode == 39) { // Right arrow key pressed
      $('#next_page').children()[0].click(); // Click the next link button
  }
});