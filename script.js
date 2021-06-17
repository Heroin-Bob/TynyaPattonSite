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
/*
function loader(){
  var coll = document.getElementsByClassName("readMore");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      if (this.innerText == "Read More...") {
        document.getElementById("aboutMeContent").getElementsByClassName("moreText")[0].style.display = "inline";
        this.innerText = "Read Less...";

      } else {
        this.innerText = "Read More...";
        document.getElementById("aboutMeContent").getElementsByClassName("moreText")[0].style.display = "none";
      }
    });
  }
}
*/
