$(document).ready(function () {

var swiper = new Swiper('.swiper-container', {
    autoplay: true,
    loop: true,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
    }
  });

  $('.trend-slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows:true,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
});

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", " ");
    this.className += " active";
  });
}

var audio = {    
      init: function() {        
      var $that = this;        
          $(function() {            
              $that.components.media();        
          });    
      },
      components: {        
          media: function(target) {            
              var media = $('audio.fc-media', (target !== undefined) ? target : 'body');            
              if (media.length) {                
                  media.mediaelementplayer({                    
                      audioHeight: 40,
                      features : ['playpause', 'current', 'duration', 'progress', 'volume', 'tracks', 'fullscreen'],
                      alwaysShowControls      : true,
                      timeAndDurationSeparator: '<span></span>',
                      iPadUseNativeControls: true,
                      iPhoneUseNativeControls: true,
                      AndroidUseNativeControls: true                
                  });            
              }        
          },
              
      },
  };
  audio.init();


  $("#slider").roundSlider({
		min: 0,
		max: 100,
		step: 1,
		value: null,
		radius: 85,
		width: 16,
		handleSize: "+0",
		startAngle: 0,
		endAngle: "+360",
		animation: true,
		showTooltip: true,
		editableTooltip: true,
		readOnly: false,
		disabled: false,
		keyboardAction: true,
		mouseScrollAction: false,
		sliderType: "default",
		circleShape: "full",
		handleShape: "round",
		lineCap: "square",

		// events
		beforeCreate: null,
		create: null,
		start: null,
		drag: null,
		change: null,
		stop: null,
		tooltipFormat: null
	});