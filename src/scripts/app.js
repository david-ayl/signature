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

  //loader();
  //resp_menu();

  events();
  bind();

  /*
    console.log("zblah");
    var link = $(".radio_input:checked").closest(".event_unit").find(".event_img");
    var src = $(".radio_input:checked").closest(".event_unit").find(".event_img").attr("src");
    var img = $("<img class='event_img' style='width:250px;height:auto;display:block;' src='" + src + "'>");

    $("#event_sign_wrapper").empty().append(img);
*/


});
