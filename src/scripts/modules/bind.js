var $ = require("jquery");


var bind = function() {

  var inputs = $("[data-bind]");

  inputs.on("keyup", function() {
    var inputName = $(this).attr("name");
    var signatureElement = $("#" + inputName);


    if($(this).val() == "") {


      if(inputName == "facebook" || inputName == "twitter" || inputName == "linkedin") {
        signatureElement.hide();
      }
      else if(inputName == "mobile") {
        signatureElement.closest("tr").hide();
      }
      else{
        var txt = $(this).attr("placeholder");
        txt = txt.replace("ex: ", "");
        signatureElement.text(txt);
      }

    }
    else{

      if(inputName == "facebook" || inputName == "twitter" || inputName == "linkedin") {
        signatureElement.show().attr("href", $(this).val());
      }
      else if(inputName == "mobile") {
        signatureElement.closest("tr").show();
        signatureElement.text($(this).val());
      }
      else if(inputName == "email") {
        signatureElement.closest("a").attr("href", "mailto:" + $(this).val());
        signatureElement.text($(this).val());
      }
      else{
        signatureElement.text($(this).val());
      }

    }

  });

}

module.exports = bind;
