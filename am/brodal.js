

var brodalTarget = $(".brodal"); 

  function broOpenbrodal(target){

    var brodalAnimationbro = new TimelineMax()
        brodalAnimationbro.set("body", { overflow: "hidden" })
          .fromTo(
            brodalTarget,
            "0.2",
            { display: "none", opacity: "0",  transform: "translateX(0px) rotateY(0deg) scale(0)", transition: " all 1s ease",  },
            { display: "block", opacity: "1",   transform: "translateX(-20px) rotateY(360deg) scale(1)" },
            "brodalClosepageTime+=0"
          )




          
          .set(
            (brodalTarget + ' .brodal-container ' ),
            {
              opacity: "0",
              display: "block",
              height: "10px",
              width: "10px",
              transform: "translateX(0px) rotateY(0deg)",
              y: "100vh",
             
            },
            {
              transform: "translateX(-800px) rotate(-540deg)",
              opacity: "0",
              offset: 0
            },
            {
              offset: 1,
              transform: "translateX(0) rotateZ(80deg)",
              opacity: 1
            },
            "brodalClosepageTime+=0.2"
          )
          .to(
            (brodalTarget + ' .brodal-container'),
            "1",
            { y: "0", opacity: "1",  transform: "translateX(-8px) rotate(40deg) ", ease: Elastic.easeOut.config(1, 1) },
            "brodalClosepageTime+=0.20"
          )



          .set(
            (brodalTarget + ' .brodal-container'),
            { height: "auto", width: "100%", transform: "translateX(-8px) rotateZ(180deg)scale(1)" },
           "brodalClosepageTime+=0.51"
          )
          .from(
            (brodalTarget + ' .brodal-container'),
            0.45,
            { height:"0px", width:"0px", opacity: "0", transform: "translateX(-8px) rotateZ(360deg)", ease: Power2.easeIn, immediateRender:false,  },
            "brodalClosepageTime+=0.50"
          )
          .to(
            (brodalTarget + ' .brodal-container'),
            0.45,
            {transform: "translateX(-8px) rotateZ(360deg)", opacity: "1", height:"40vh",},
            "brodalClosepageTime+=0.51"
          )
          .fromTo(
            (brodalTarget + ' .brodal-container .brodal-header, brodal-close, .bro-baby, .bro-babytwo, .hideme, .palp-text, .palp-pic, .framegame, .extras, .jaw-words, .brodal-containertwo, .claw-text, .jframe, .crib-text, .spot, .blackout' + brodalTarget + ' .brodal-container .brodal-body, .brodal-close, .bro-baby, .bro-babytwo, .hideme, .palp-text, .palp-pic, .framegame, .extras, .jaw-words, .brodal-containertwo, .claw-text, .jframe, .crib-text, .spot, .blackout' + brodalTarget + ' .brodal-container .brodal-footer .brodal-close, .bro-baby, .bro-babytwo, .hideme, .palp-text, .palp-pic, .framegame, .extras, .jaw-words, .brodal-containertwo, .claw-text, .jframe, .crib-text, .spot, .blackout '),
            0.46,
            
            { opacity: 0, transform: "translateX(-8px) rotateZ(-60deg) scale(0)",  },
           
            { opacity: 1,  transform: "translateX(-8px) rotateZ(0deg) scale(1)" },
            "brodalClosepageTime+=0.9"

            
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
