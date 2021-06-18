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
    $(this).toggleClass('active');
    var content = $(this).next().prop('outerHTML');
    $('#servicesDescriptionContainer').html(content);
    $('#servicesDescriptionContainer .serviceDescription').css('display', 'block')

  });
});
