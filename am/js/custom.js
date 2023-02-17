$(document).ready(function(){
   $('#modal-btn').on('click', function(){
   $('#modalBox').show();
   });
  // close modal on clicking close button
  $('.modal-content').find('.close').on('click',function(){
   $(this).parents('#modalBox').hide();
  });
  // close modal on click outside at anywhere
  $(document).on('click',function(e){
    if(!(($(e.target).closest("#modalBox").length > 0 ) || ($(e.target).closest("#modal-btn").length > 0))){
    $("#modalBox").hide();
   }
  });
});