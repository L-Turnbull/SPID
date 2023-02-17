var modalTarget = $(".tnd-modal"); 

  function tlOpenModal(target){

    var modalAnimationTl = new TimelineMax()
        modalAnimationTl.set("body", { overflow: "hidden" })
          .fromTo(
            modalTarget,
            "0.2",
            { display: "none", opacity: 0 },
            { display: "block", opacity: 1 },
            "modalCloseSurveyTime+=0"
          )
          .set(
            (modalTarget + ' .tnd-modal-container'),
            {
              opacity: "0",
              display: "block",
              height: "40px",
              width: "40px",
              y: "100vh",
              borderRadius: "50%"
            },
            "modalCloseSurveyTime+=0.2"
          )
          .to(
            (modalTarget + ' .tnd-modal-container'),
            "1",
            { y: "0", opacity: "1", ease: Elastic.easeOut.config(1, 0.5) },
            "modalCloseSurveyTime+=0.21"
          )



          .set(
            (modalTarget + ' .cal-text'),
            { height: "auto", width: "100%", transform: "translateX(-8px) rotateZ(180deg)scale(1)" },
           "brodalClosepageTime+=0.51"
          )
          .from(
            (modalTarget+ ' .cal-text'),
            0.45,
            { height:"0px", width:"0px", opacity: "0", transform: "translateX(-8px) rotateZ(360deg)", ease: Power2.easeIn, immediateRender:false,  },
            "brodalClosepageTime+=0.50"
          )
          .to(
            (modalTarget+ ' .cal-text'),
            0.45,
            {transform: "translateX(-8px) rotateZ(360deg)", opacity: "1", height:"30vh",},
            "brodalClosepageTime+=0.51"
          )



          .set(
            (modalTarget + ' .tnd-modal-container'),
            { height: "auto", width: "100%", },
           "modalCloseSurveyTime+=0.51"
          )
          .from(
            (modalTarget + ' .tnd-modal-container'),
            0.35,
            { height:"40px", width:"40px", ease: Power2.easeIn, immediateRender:false },
            "modalCloseSurveyTime+=0.51"
          )
          .to(
            (modalTarget + ' .tnd-modal-container'),
            0.35,
            {  borderRadius: "7px" },
            "modalCloseSurveyTime+=0.5"
          )
          .fromTo(
            (modalTarget + ' .tnd-modal-container .tnd-modal-header, .crib-text' + modalTarget + ' .tnd-modal-container .tnd-modal-body, , .crib-text' + modalTarget + ' .tnd-modal-container .tnd-modal-footer, .crib-text'),
            0.35,
            { opacity: 0 },
            { opacity: 1 },
            "modalCloseSurveyTime+=0.1"
          );

          return modalAnimationTl;
  };
  
  var tl;

  //OPEN MODAL
  $(".modal-trigger").click(function() {
    modalTarget = '#' + $(this).attr("data-target");
    tl = tlOpenModal(modalTarget);
  });
  
  //CLOSE MODAL
  $( ".modal-close" ).click(function() {
    tl.reverse();
  });





  