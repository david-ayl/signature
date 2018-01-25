var $ = require("jquery");


var bind = function() {

  var inputs = $("[data-bind]");

  inputs.on("keyup", function() {
    var inputName = $(this).attr("name");
    var signatureElement = $("#" + inputName);


    if($(this).val() == "") {


      if(inputName == "linkedin") {
        signatureElement.attr("href", "https://www.linkedin.com/company/adyoulike/");
      }
      else if(inputName == "mobile" || inputName == "phone") {
        signatureElement.closest("td").hide().prev("td").hide();
      }
      else if(inputName == "skype") {
        signatureElement.hide();
      }
      else{
        var txt = $(this).attr("placeholder");
        txt = txt.replace("ex: ", "");
        signatureElement.text(txt);
      }

    }
    else{

      if(inputName == "linkedin") {
        signatureElement.show().attr("href", $(this).val());
      }
      else if(inputName == "mobile" || inputName == "phone") {
        signatureElement.closest("td").show().prev("td").show();
        signatureElement.text($(this).val());
      }
      else if(inputName == "skype") {
        signatureElement.show().attr("href", "skype:" + $(this).val() + "?call");
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
