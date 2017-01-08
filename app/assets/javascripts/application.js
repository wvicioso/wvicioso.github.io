// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
  event.preventDefault()

  $( ".filter" ).hover(
    function() {
      $( ".filter" ).css({'height': '70px', 'opacity': '1', 'background-color': 'rgba(0, 0, 0, .001)'});
      $( ".web" ).css({'top': '105px', 'opacity': '1'});

    }, function() {
      $( ".filter" ).css({'height': '10px', 'opacity': '.001', 'background-color': '#424242'});
      $( ".web" ).css({'top': '105px', 'opacity': '.001'});
    }
  );

  $('.web').hover(
    function(){
      $('.web').css({'background-color': '#646464'});
    }, function() {
      $('.web').css({'background-color': '#424242'});
    }
  );

  $('.mobile').hover(
    function(){
      $('.mobile').css({'background-color': '#646464'});
    }, function() {
      $('.mobile').css({'background-color': '#424242'});
    }
  );


  $('.web').click(function(){
    event.preventDefault()
    $('.type-web').show()
    $('.type-mobile').hide()
  });

  $('.mobile').click(function(){
    event.preventDefault()
    $('.type-web').hide()
    $('.type-mobile').show()
  });

  $('.all').click(function(){
    event.preventDefault()
    $('.type-web').show()
    $('.type-mobile').show()
  });

   $(".button-collapse").sideNav();

   $(".project-item").click(function() {
     $( ".project-body" ).stop(true, true)
     $('.card').css({'opacity': '1', 'background-color': 'white'});
     var proj_title = $(event.target).closest('.card').css({'opacity': '.3', 'background-color': 'white'});

     var proj_title = $(event.target).closest('.card').find('h4').html()

     $.ajax({
       url: '/project/find',
       method: "get",
       data: {title: proj_title}
     }).done(function(response){
       $( ".project-body" ).fadeOut( 800, function() {
         $(".project-body").html(response.partial)
        });
       $( ".project-body" ).fadeIn( 800, function() {
        });
     })
   });

   $(".nav-mobile").click(function() {
        event.preventDefault()
       $('html,body').animate({
           scrollTop: $(".mobile").offset().top},
           'slow');
   });

   $(".nav-web").click(function() {
        event.preventDefault()
       $('html,body').animate({
           scrollTop: $(".web-apps").offset().top},
           'slow');
   });


   $('.parallax').parallax();
});
