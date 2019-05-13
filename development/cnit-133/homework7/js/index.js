$(document).ready(function () {
    $('.desc').hide();

    $('.hd').click(function () {
        let hd = $(this);
        let icon = $(this).find('.icon');
        let desc = hd.next('.desc');

        if (desc.css('display') == "none") {
            desc.slideDown();
            icon.removeClass('plus');
            icon.addClass('minus');
        } else {
            desc.fadeOut();
            icon.removeClass('minus');
            icon.addClass('plus');
        }
    });
});