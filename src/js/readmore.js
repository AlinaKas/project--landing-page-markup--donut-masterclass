(function($) {
  $.fn.truncate = function(options) {

    var defaults = {
      length: 100,
      minTrail: 10,
      moreText: "",
      lessText: "",
      ellipsisText: ""
    };

    var options = $.extend(defaults, options);

    return this.each(function() {
      obj = $(this);
      var body = obj.html();

      if (body.length > options.length + options.minTrail) {
        var splitLocation = body.indexOf(' ', options.length);
        if (splitLocation != -1) {

          var splitLocation = body.indexOf(' ', options.length);
          var str1 = body.substring(0, splitLocation);
          var str2 = body.substring(splitLocation, body.length - 1);
          obj.html(str1 + '<span class="truncate_ellipsis">' + options.ellipsisText +
            '</span>' + '<span  class="truncate_more">' + str2 + '</span>');
          obj.find('.truncate_more').css("display", "none");

          obj.append(
            '<div class="clearboth">' +
            '<a href="#" class="truncate_more_link">' + options.moreText + '</a>' +
            '</div>'
          );

          var moreLink = $('.truncate_more_link', obj);
          var moreContent = $('.truncate_more', obj);
          var ellipsis = $('.truncate_ellipsis', obj);
          moreLink.click(function() {
            if (moreLink.text() == options.moreText) {
              moreContent.show('normal');
              moreLink.text(options.lessText);
              ellipsis.css("display", "none");
            } else {
              moreContent.hide('normal');
              moreLink.text(options.moreText);
              ellipsis.css("display", "inline");
            }
            return false;
          });
        }
      }

    });
  };
})(jQuery);

$().ready(function() {
  $('.story').truncate({
    length: 0,
    minTrail: 10,
    moreText: 'Read more',
    lessText: 'Less',
    ellipsisText: ""
  });
});
