var $root = $('html, body');
$('#toContent').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 2000);
    return false;
});
