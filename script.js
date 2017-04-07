var main = function() {
  $('form').submit(function() {
    var comment = $('#comment').val();  
    if(comment !== "") {
      var html = $('<li>').text(comment);
      $(html).prependTo('.comments'); 
    }

    return false;
  });
};

$(document).ready(main);
