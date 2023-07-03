$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#btn-cancelar').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(e){
        e.preventDefault()
        const enderecoNovaImg = $('#endereço-img-nova').val()
        const novoitem = $('<li style="display: none"></li>')
        $(`<img src="${enderecoNovaImg}"/>`).appendTo(novoitem)
        $(`
        <div class="overlay-img-link">
        <a href="${enderecoNovaImg}" target="_blank" title="Ver imagem em tamanho real">
        Ver imagem em tamanho real
        </a>
        </div>
        `).appendTo(novoitem)
        $(novoitem).appendTo('ul')
        $(novoitem).fadeIn(300);
        $('#endereço-img-nova').val('')
    })
})