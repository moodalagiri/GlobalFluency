$(document).ready(function() {
    $("#more").click(function () {

        $header = $(this);

        $content = $('.more-content');
        //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
        $content.slideToggle(500, function () {

            $header.text(function () {
                //change text based on condition
                return $content.is(":visible") ? "Less▲" : "More▼";
            });
        });

    });

    $('ul.nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });

    var header = $("#secondary-menu");
    var headerY = header.offset().top;
    $(document).scroll(function () {
        var y = $(document).scrollTop();

        if (y >= headerY) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    });
});
