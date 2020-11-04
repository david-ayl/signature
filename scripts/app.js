var eventsList = [

  {
    "image_url" : "events/Default-Banner.png",
    "link_to_event" : "https://adyoulike.com/"
  },
  {
    "image_url" : "events/Black-Banner.png",
    "link_to_event" : "https://adyoulike.com/"
  }
];




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
      else if(inputName == "companyemail") {
        var txt = $(this).attr("placeholder").replace("@adyoulike.com", "");
        txt = txt.replace("ex: ", "");
        signatureElement.text(txt);
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
        var _val = $(this).val();
        signatureElement.closest("td").show().prev("td").show();
        signatureElement.html(_val.replace("+", "&plus;"));
        signatureElement.closest("td").prev("td").find("a").attr("href", _val);
      }
      else if(inputName == "skype") {
        signatureElement.show().attr("href", "skype:" + $(this).val() + "?call");
      }
      else if(inputName == "companyemail") {
        var val = $(this).val();
        signatureElement.closest("td").prev("td").find("a").attr("href", "mailto:" + $(this).val());
        $("#companyemail").text(val.replace(/@([a-zA-Z\-\_0-9]+(\.)?([a-zA-Z\-\_]+)?)?/, ""))
      }
      else{
        signatureElement.text($(this).val());
      }

    }

  });

}

var events = function() {

  var elemList = function(img, url) {
    return $("<div class='event_unit'><input value='" + img + "' class='radio_input' type='radio' name='event'><label class='radio_label'></label><div class='event_img_wrapper'><img src='" + img + "' data-url='" + url + "' class='event_img'></div></div>");
  };

  var elemSign = function(img, url) {
    return $("<a href='" + url + "' target='_blank' style='text-decoration:none;display: block;'><img src='" + img + "' style='display:block;width:100%;'></a>");
  };

    $(eventsList).each(function(_data) {
      var   _img = eventsList[_data].image_url,
            _url = eventsList[_data].link_to_event;

      $("#events_wrapper").append(elemList(_img, _url));

      $(".radio_input").change(function(e) {
        var   thisimg = $(".radio_input:checked").val(),
              thisurl = $(".radio_input:checked").closest(".event_unit").find("img").attr("data-url");

        $("#event_sign_wrapper").empty().append(elemSign(thisimg, thisurl));
      });
    })

    $("#events_wrapper").width(eventsList.length * 220 + 200 + "px");


}

var loader = function() {

  $("#main_loader").addClass("loaded");

  setTimeout(function(){

    $("#main_loader").animate({
      opacity: 0,
    }, 300, function() {
      $("#main_loader").fadeOut();
    });

  }, 2000);

}



var responsive_menu = function() {

  $(document).on("click", "#responsive_menu", function() {

    $("#menu_left_responsive").addClass("visible");

  })

  .on("click", "#close_menu", function() {

    $("#menu_left_responsive").removeClass("visible");

  });

}


bind()
events()
new ClipboardJS('.btn')
