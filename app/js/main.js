'use strict';

;(function($){

//about section scripts

  //load & show the description
  var loadDescr = true
  $('.about-content__btn').click(function(){
    if (loadDescr) {
      $.get("about-description.html", function(data){
        $('.about-description').append(data);
      });
      loadDescr = false;
    };

    $(this).toggleClass('about-content__btn--active');
    $(this).html( $(this).text() == 'Hide' ? 'Read more' : 'Hide' );

    setTimeout(function() {
      $('.about-description').toggleClass('about-description--active');
    }, 100);

  });


//gallery section scripts

  //set grid-container's height
  var galleryHeight = +$('.gallery-photos').width() * 18 / 20;
  $('.gallery-photos').height(galleryHeight);

  //load & show the photos
  $('#gallery__btn').click(function(){

    galleryHeight = +$('.gallery-photos').width() * 30 / 20;
    $('.gallery-photos').height(galleryHeight);
    $('.gallery-photos').css('grid-template-rows', 'repeat(30,1fr)')
    $('.gallery__btn').css('opacity', '0')

    $.get("more-photos.html", function(data){
      $('.gallery-photos').append(data);
    });
  });


//articles section scripts

  //show article's fulltext
  $('.articles-content-item__more').click(function(){
    var articleID = $(this).parent().attr('id');
    $(`#${articleID}-fulltext`).css({'display': 'flex', 'padding': '0 5%'}).width('90%');
    setTimeout(function() {
      $(`#${articleID}-fulltext`).css({'max-height': '1500px', 'padding': '5%'});
    }, 500);
  });

  //hide article's fulltext
  $('.articles-content-item-fulltext__more').click(function(){
    var articleFulltextID = $(this).parent().attr('id')
    $(`#${articleFulltextID}`).css({'max-height': '5px', 'padding': '0 5%'});
    setTimeout(function() {
      $(`#${articleFulltextID}`).width('0');
    }, 500);
    setTimeout(function() {
      $(`#${articleFulltextID}`).css('display', 'none');
    }, 800);
  })


}(jQuery));








// ``````````````````
