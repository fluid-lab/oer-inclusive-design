(function ($) {
    $("document").ready(function () {
      var about = $(".a2 a");
      var subMenu = $(".a2 ul");

      about.on("focus", function () {
        subMenu.show();
      });

      // $(".a2").on("focusout", function () {
      //   subMenu.hide();
      // });
    });
})(jQuery);
