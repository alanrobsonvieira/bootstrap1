  // Parallax

  // setTimeout serve para carregar primeiro as imagens
  setTimeout(function () {
    $('#data-area').parallax({
      imageSrc: 'img/cidadeparallax.png'
    });
    $('#apply-area').parallax({
      imageSrc: 'img/pattern.png'
    });
  }, 200);

  // Filtro portfólio

  $('.filter-btn').on('click', function () {

    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');