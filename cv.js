/*Scroll du bouton pour remonter la page web*/

$(function () {
    $('body').append(
        '<div id="fleche"><i class="fas fa-arrow-circle-up"></i></div>'
    );
    $(window).scroll(function () {
        if ($(this).scrollTop() > 86) {
            /* si l'espace depuis le haut est supérieur à 86px */
            $('#fleche').fadeIn(); /* alors apparition du boutton */
        } else {
            $('#fleche').fadeOut(200); /* sinon il disparaît */
        }
    });
    $('#fleche').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 900);
        return false;
    });
});