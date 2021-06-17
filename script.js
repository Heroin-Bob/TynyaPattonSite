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
