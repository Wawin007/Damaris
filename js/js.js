$(document).ready(function() {
    var inicio = $('#inicio');
    var hero = $('#hero-text');
    var carta = $('#carta');

    inicio.click(function() {
        hero.css('display', 'none');
        carta.css('display', 'block')
    });

    const typed = new Typed('.typed', {
        strings: ['<i class="para"> Para: Damaris</i>'],
        //stringsElement: "#carta",
        typeSpeed: 130,
        startDelay: 1900,
        loop: false,
        showCursor: false,
        contentType: 'html'
    });
})