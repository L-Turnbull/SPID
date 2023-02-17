

var brodalTarget = $(".brodal"); 

  function broOpenbrodal(target){

    var brodalAnimationbro = new TimelineMax()
        brodalAnimationbro.set("body", { overflow: "hidden" })
          .fromTo(
            brodalTarget,
            "0.49",
            { display: "none", opacity: "0",  transform: "translateX(0px) rotateY(0deg) scale(0)", transition: " all 1s ease"  },
            { display: "block", opacity: "1",   transform: "translateX(-20px) scale(1)" },
            "brodalClosepageTime+=0.49"
          )
          .set(
            (brodalTarget + ' .brodal-container ' ),
            {
              opacity: "0",
              display: "block",
              height: "0px",
              width: "0px",
              y: "100vh"
             
            },
            {
              transform: "translateX(-800px)",
              opacity: "0",
              offset: 0
            },
            {
              offset: 1,
              transform: "translateX(0)",
              opacity: 1
            },
            "brodalClosepageTime+=0.49"
          )
          .to(
            (brodalTarget + ' .brodal-container'),
            "1",
            { y: "0", opacity: "1",  transform: "translateX(-8px) rotate(40deg) ", ease: Elastic.easeOut.config(1, 1) },
            "brodalClosepageTime+=0.49"
          )
          .set(
            (brodalTarget + ' .brodal-container'),
            { height: "auto", width: "100%", },
           "brodalClosepageTime+=0.49"
          )
          .from(
            (brodalTarget + ' .brodal-container'),
            0.45,
            { height:"0px", width:"0px", opacity: "0", transform: "translateX(-1800px)", ease: Power1.easeIn, immediateRender:false },
            "brodalClosepageTime+=0.49"
          )
          .to(
            (brodalTarget + ' .brodal-container'),
            0.45,
            {transform: "translateX(-8px) translateY(-58px)", opacity: "1",height:"60%", },
            "brodalClosepageTime+=0.49"
          )
          .fromTo(
            (brodalTarget + ' .brodal-container .brodal-header, .bro-babytwo, brodal-close, .bro-baby,' + brodalTarget + ' .brodal-container .brodal-body, .brodal-close, .bro-baby, .bro-babytwo' + brodalTarget + ' .brodal-container .brodal-footer .brodal-close, .bro-baby, .bro-babytwo'),
            0.49,
            
            { opacity: 0, transform: "translateX(-1800px) scale(0)",  },
           
            { opacity: 1,  transform: "translateX(-8px)" },
            "brodalClosepageTime+=0.49"
          );

          return brodalAnimationbro;
  };
  
  var bro;

  //OPEN brodal
  $(".brodal-trigger").click(function() {
    brodalTarget = '#' + $(this).attr("data-target");
    bro = broOpenbrodal(brodalTarget);
  });
  
  //CLOSE brodal
  $( ".brodal-close" ).click(function() {
    bro.reverse();
  });
