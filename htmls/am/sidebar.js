$(document).ready(function() {

  function toggleSidebar() {
    $(".button").toggleClass("active");
    $("main").toggleClass("move-to-left");
    $(".sidebar-item").toggleClass("active");
  }

  $(".button").on("click tap", function() {
    toggleSidebar();
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      toggleSidebar();
    }
  });

});
function toggleSidebarback() {
  $(".p2").toggleClass("active");
  $("main").toggleClass("move-to-right");
  $(".sidebar-item").toggleClass("active");
}

$(".p2").on("click tap", function() {
  toggleSidebarback();
});

$(document).keyup(function(e) {
  if (e.keyCode === 27) {
    toggleSidebarback();
  }
});
