$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown('slow');
    });

    $('form').submit(function(e) {
        e.preventDefault();
        const addNovaImagem = $('#add-image').val();
        if (addNovaImagem) {
            $('ul').append(`<li style="display: none;"><img src="${addNovaImagem}" alt="Imagem"></li>`);
            $(
                `
                <div class="overlay">
                    <a href="${addNovaImagem}" target="_blank">Ver original</a>
                </div>
                `
            ).appendTo('ul li:last-child');
            $('ul li:last-child').slideDown('slow');
            $('ul li:last-child').fadeIn('slow');
            $('ul li:last-child').animate({
                opacity: 1
            }, 'slow');


            $('form').slideUp('slow');
        } else {
            alert('URL inválida');
        }
        $('#add-image').val('');
    });

    $('form #cancel').click(function() {
        $('form').slideUp('slow');
    });
});

