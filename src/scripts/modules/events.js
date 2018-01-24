var $    = require("jquery");

var events = function() {

  var elemList = function(img, url) {
    return $("<div class='event_unit'><input value='" + img + "' class='radio_input' type='radio' name='event'><label class='radio_label'></label><div class='event_img_wrapper'><img src='" + img + "' data-url='" + url + "' class='event_img'></div></div>");
  };

  var elemSign = function(img, url) {
    return $("<a href='" + url + "' target='_blank' style='text-decoration:none;width: 300px;display: block;'><img src='" + img + "' style='display:block;width:100%;'></a>");
  };

  $.get("http://public.adyoulike.com/Signature/events/images_events.json", function(data) {
  /*$.get("../events/images_events.json", function(data) {*/

    data.forEach(function(_data) {
      var   _img = _data.image_url,
            _url = _data.link_to_event;

      $("#events_wrapper").append(elemList(_img, _url));

      $(".radio_input").change(function(e) {
        var   thisimg = $(".radio_input:checked").val(),
              thisurl = $(".radio_input:checked").closest(".event_unit").find("img").attr("data-url");

        $("#event_sign_wrapper").empty().append(elemSign(thisimg, thisurl));
      });
    })

    $("#events_wrapper").width(data.length * 220 + 200 + "px");

  });

}

module.exports = events;
