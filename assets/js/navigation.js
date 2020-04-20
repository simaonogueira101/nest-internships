var isActive = false;

$('.burger-menu').on('click', function() {
    if (isActive) {
        $(this).removeClass('active');
        $('.overlay').removeClass('menu-open');
        $('body').css({ overflow: 'auto'});
    } else {
        $(this).addClass('active');
        $('.overlay').addClass('menu-open');
        $('body').css({ overflow: 'hidden'});
    }

    isActive = !isActive;
});