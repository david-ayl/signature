var $ = require("jquery");


var responsive_menu = function() {

  $(document).on("click", "#responsive_menu", function() {

    $("#menu_left_responsive").addClass("visible");

  })

  .on("click", "#close_menu", function() {

    $("#menu_left_responsive").removeClass("visible");

  });

}


module.exports = responsive_menu;
