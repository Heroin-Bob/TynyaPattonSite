$(document).ready(function(){
  $('#navIcon').click(function(){
    if (window.innerWidth < "935"){
        $('ul').toggleClass('show');
    }
  });
});

$(document).ready(function(){
  $('.navLink').click(function(){
    if (window.innerWidth < "935"){
        $('ul').toggleClass('show');
    }
  });
});

$(document).ready(function(){
  $('.readMore').click(function(){
    if (this.innerText == "Read More...") {
      document.getElementById("aboutMeContent").getElementsByClassName("moreText")[0].style.display = "inline";
      this.innerText = "Read Less...";

    } else {
      this.innerText = "Read More...";
      document.getElementById("aboutMeContent").getElementsByClassName("moreText")[0].style.display = "none";
    }
  });
});

$(document).ready(function(){
  $('.serviceHeading').click(function(){
    $('.serviceHeading').each(function(i, obj) {
      if ($(this).hasClass('active')){
        $(this).toggleClass('active');
        $(this).css('background','transparent');
        $(this).css('border-top','1px solid transparent');
      }
    });
    $(this).toggleClass('active');
    var oneIn = $(this).next().prop('outerHTML');
    var twoIn = $(this).next().next().prop('outerHTML');
    var content = oneIn + twoIn ;
    $(this).css('background','var(--color3)');
    $(this).css('border-top','1px solid var(--color2)');
    $('#servicesDescriptionContainer').html(content);
    $('#servicesDescriptionContainer .serviceDescription').css('display', 'block');
    $('#servicesDescriptionContainer .serviceImage').css('display', 'block');
  });
});

window.location.href = window.location + "#home";

/*
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByTagName("nav")[0].style.top = "0";
  } else {
    document.getElementsByTagName("nav")[0].style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};
*/
