let $footer = $("#footer");
let $button = $(".accordion-button");
let $text = $(".accordion-collapse");

$(window).on("load resize", function () {
  if (window.innerWidth > 968) {
    if (!$button.hasClass("hide")) {
      $button.attr("class", "accordion-button collapse hide");
    }
    $text.attr("class", "accordion-collapse show ");
  } else {
    if (!$button.hasClass("show")) {
      $button.attr("class", "accordion-button collapse show collapsed ");
    }
    $text.attr("class", "accordion-collapse collapse");
  }
});
