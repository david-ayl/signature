var $         = require("jquery");
var loader    = require("./modules/loader.js");
var resp_menu = require("./modules/responsive_menu.js");
var bind      = require("./modules/bind.js");
var events    = require("./modules/events.js");


$(document).ready(function() {


  var clipboard = new Clipboard('.btn');
  clipboard.on('success', function(e) {
    console.log(e);
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
  });

  clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
  });

  loader();

  events();
  bind();

  $("#clear_events").click(function() {
    $(".radio_input").each(function() {
      $(this).prop('checked', false);
    });
    $("input[type='text']").each(function() {
      $(this).val("").keyup();
    });
    $("#event_sign_wrapper").empty();
  });


});
