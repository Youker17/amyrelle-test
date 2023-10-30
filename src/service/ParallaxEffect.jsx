import React, { useEffect } from 'react'

function ParallaxEffect() {
  

    useEffect(()=> {

      var map = document.querySelector('.hero-map')
      var count = 0 
      count == 0 ? map.style.display = "none" : null
      var ticking = false;
      var isFirefox = /Firefox/i.test(navigator.userAgent);
      var isIe =
        /MSIE/i.test(navigator.userAgent) ||
        /Trident.*rv\:11\./i.test(navigator.userAgent);
      var scrollSensitivitySetting = 30;
      var slideDurationSetting = 800;
      var currentSlideNumber = 0;
      var totalSlideNumber = $(".background").length;
      function parallaxScroll(evt) {
        if (isFirefox) {
        var  delta = evt.detail * -120;
        } else if (isIe) {
         var delta = -evt.deltaY;
        } else {
         var delta = evt.wheelDelta;
        }
        if (ticking != true) {
          if (delta <= -scrollSensitivitySetting) {
            ticking = true;
            if (currentSlideNumber !== totalSlideNumber - 1) {
              currentSlideNumber++;
              nextItem();
              selectRadioButton(currentSlideNumber + 1);
            }
            slideDurationTimeout(slideDurationSetting);
          }
          if (delta >= scrollSensitivitySetting) {
            ticking = true;
            if (currentSlideNumber !== 0) {
              currentSlideNumber--;
            }
    
            previousItem();
            selectRadioButton(currentSlideNumber + 1);
            slideDurationTimeout(slideDurationSetting);
          }
        }
      }
      function slideDurationTimeout(slideDuration) {
        setTimeout(function () {
          ticking = false;
        }, slideDuration);
      }
      var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
      window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);
      function nextItem() {
        var $previousSlide = $(".background").eq(currentSlideNumber - 1);
        $previousSlide
          .css("transform", "translate3d(0,-130vh,0)")
          .find(".content-wrapper")
          .css("transform", "translateY(40vh)");
        currentSlideTransition();
      }
      function previousItem() {
       
        var $previousSlide = $(".background").eq(currentSlideNumber + 1);
        $previousSlide
          .css("transform", "translate3d(0,30vh,0)")
          .find(".content-wrapper")
          .css("transform", "translateY(30vh)");
        currentSlideTransition();
      }
      function currentSlideTransition() {
        var $currentSlide = $(".background").eq(currentSlideNumber);
        $currentSlide
        .css("transform", "translate3d(0,-15vh,0)")
        .find(".content-wrapper")
        .css("transform", "translateY(15vh)");
      }  
      
       
      function selectRadioButton(sectionNumber) {
            count = sectionNumber
            console.log(count)
        if (sectionNumber > 1 && sectionNumber < 7 && count != 1) {
          map.style.display ="flex"
        }
        else{
          map.style.display ="none"
        }
        var radioId = "redio" + sectionNumber;
        document.getElementById(radioId).checked = true;
      }
    
    
      document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
        radio.addEventListener('change', function() {
          var sectionId = this.value;
          var targetSection = document.getElementById(sectionId);
          if (targetSection) {
            var targetIndex = $(".background").index(targetSection);
            if (targetIndex > currentSlideNumber) {
              while (currentSlideNumber < targetIndex) {
                currentSlideNumber++;
                nextItem();
              }
            } else if (targetIndex < currentSlideNumber) {
              while (currentSlideNumber > targetIndex) {
                currentSlideNumber--;
                previousItem();
              }
            }
            selectRadioButton(currentSlideNumber + 1);
            currentSlideTransition();
          }
        });
      });

    })

    return null
}

export default ParallaxEffect