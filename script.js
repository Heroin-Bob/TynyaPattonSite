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

function dropdownSelect(selection){
  var description = "";
  var option = "";
  var i = "";
  switch(selection){
    case "depression":
      i = 0;
      option = "Depression and Bipolar Disorders";
      break;
    case "anxiety":
      i = 1;
      option = "Anxiety";
      break;
    case "lgbtqia":
      i = 2;
      option = "LGBTQIA+";
      break;
    case "other":
      i = 3;
      option = "Other";
      break;
  }
  description = document.getElementsByClassName("serviceDescription")[i].innerHTML;

  document.getElementsByClassName("dropbtn")[0].innerText = option;
  document.getElementById("servicesDescriptionContainer").innerHTML = description;
  document.getElementsByClassName("dropdown-content")[0].style.display = "none";

}


function showDropdown(){
  document.getElementsByClassName("dropdown-content")[0].style.display = "block";
  /*
  var dropdown = document.getElementsByClassName("dropdown")[0];
  if (  dropdown.getElementsByTagName("span")[0].style.content === '\f067'){
    dropdown.getElementsByTagName("span")[0].style.content = '\f068';
  } else {
    dropdown.getElementsByTagName("span")[0].style.content = '\f067';
  }
  */
}

function sendEmail(){
  var email = "tpattonlpc@gmail.com";
  var name = "Signed,\n-" + document.getElementById("emailname").value;
  var subject = document.getElementById("emailsubject").value;
  var emailBody = document.getElementById("emailbody").value;
  window.location = 'mailto:' + email + '?subject=' + subject + '&body=' + encodeURIComponent(emailBody + "\n\n" + name);
}
