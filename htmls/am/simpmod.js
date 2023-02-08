$("body").click(function(event) {
  var container = $(".shmodal");
  if (!container.is(event.target) && container.has(event.target).length === 0) {
    container.closest(".shmodal-wrap").addClass("closed");
  }
});

$(".open-shmodal").click(function(event) {
  event.preventDefault();
  event.stopPropagation();
  $($(this).attr('href')).removeClass("closed");
});

$(".shmodal-close").click(function(event) {
  event.preventDefault();
  var container = $(this).closest(".shmodal");
  var vidURL = container.find("iframe").attr('src');
  $(this).closest(".shmodal-wrap").addClass("closed");
});