
$(".checkbox").click(function () {
  var isDark = $(".checkbox").hasClass("darkMode");
  var isLight = $(".checkbox").hasClass("lightMode");

    if (isDark) {
      $(this).attr("class", "checkbox lightMode");
      $("html").css("background", "linear-gradient(to bottom,  var(--lightTopBG) 20%,  var(--lightBackground) 100%)");
      $(".bigTitle").css("color", "var(--lightDarkBlueText)");
      $(".smallTitle").css("color", "var(--lightBlueText)");
      $(".slider").css("background", "var(--lightToggle)");
      $(".grid1-item, .grid2-item").css("background", "var(--lightCardBG)");
      $(".dataNumber").css("color", "var(--lightDarkBlueText)");
      $("h3").css("color", "var(--lightBlueText)");
      $("hr").css("border-color", "var(--lightBlueText)");
    }

    if (isLight) {
      $(this).attr("class", "checkbox darkMode");
      $("html").css("background","linear-gradient(to bottom,  var(--darkTopBG) 20%,  var(--darkBackground) 100%)")
      $(".bigTitle").css("color", "var(--darkWhitetext)");
      $(".smallTitle").css("color", "var(--darkBlueText)");
      $(".slider").css("background", "var(--darkToggle)");
      $(".grid1-item, .grid2-item").css("background", "var(--darkCardBG)");
      $(".dataNumber").css("color", "var(--darkDarkBlueText)");
      $("h3").css("color", "var(--darkWhitetext)");
      $("hr").css("border-color", "var(--lightToggler)");
    }
});

/* Toggler hover effect. Both text color and background color of the toggler.*/
$("label").hover(function () {
  var isDark = $(".checkbox").hasClass("darkMode");
  var isLight = $(".checkbox").hasClass("lightMode");

  if (isDark) {
    $(".mode").css("color", "var(--darkWhitetext)");
  }

  if (isLight) {
      $(".slider").css("background", "var(--darkToggle)");
  }

}, function () {
  var isDark = $(".checkbox").hasClass("darkMode");
  var isLight = $(".checkbox").hasClass("lightMode");

  if (isDark || isLight) {
    $(".mode").css("color", "var(--darkBlueText)");
  }

  if (isLight) {
      $(".slider").css("background", "var(--lightToggle)");
  }

});

$(".grid1-item, .grid2-item").hover(function(){
  var isDark = $(".checkbox").hasClass("darkMode");
  var isLight = $(".checkbox").hasClass("lightMode");
  // $(this).css("transition-duration", "800ms ease-in-out");

  if (isDark) {
    $(this).css("background", "#4d4c7d");
  }

  if (isLight) {
    $(this).css("background", "#eee");
  }

}, function () {
  var isDark = $(".checkbox").hasClass("darkMode");
  var isLight = $(".checkbox").hasClass("lightMode");
  // $(this).css("transition", "800ms ease-in-out");

  if (isDark) {
    $(this).css("background", "var(--darkCardBG)");
  }

  if (isLight) {
    $(this).css("background", "var(--lightCardBG)");
  }

});
