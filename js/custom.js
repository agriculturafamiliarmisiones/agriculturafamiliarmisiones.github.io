(function ($) {
  "use strict";



  $('.popup-youtube, .popup-vimeo').magnificPopup({
    // disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  var review = $('.textimonial_iner');
  if (review.length) {
    review.owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: false,
      responsive: {
        0: {
          margin: 15,
        },
        600: {
          margin: 10,
        },
        1000: {
          margin: 10,
        }
      }
    });
  }
  var best_product_slider = $('.best_product_slider');
  if (best_product_slider.length) {
    best_product_slider.owlCarousel({
      items: 4,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: true,
      navText: ["next", "previous"],
      responsive: {
        0: {
          margin: 15,
          items: 1,
          nav: false
        },
        576: {
          margin: 15,
          items: 2,
          nav: false
        },
        768: {
          margin: 30,
          items: 3,
          nav: true
        },
        991: {
          margin: 30,
          items: 4,
          nav: true
        }
      }
    });
  }

  //product list slider
  var product_list_slider = $('.product_list_slider');
  if (product_list_slider.length) {
    product_list_slider.owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: true,
      navText: ["next", "previous"],
      smartSpeed: 1000,
      responsive: {
        0: {
          margin: 15,
          nav: false,
          items: 1
        },
        600: {
          margin: 15,
          items: 1,
          nav: false
        },
        768: {
          margin: 30,
          nav: true,
          items: 1
        }
      }
    });
  }

  if ($('.img-gal').length > 0) {
    $('.img-gal').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  }

  // niceSelect js code
  $(document).ready(function () {
    $('select').niceSelect();
  });

  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.main_menu').removeClass('menu_fixed animated fadeInDown');
    }
  });

  $('.counter').counterUp({
    time: 2000
  });

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 300,
    infinite: true,
    asNavFor: '.slider-nav-thumbnails',
    autoplay: true,
    pauseOnFocus: true,
    dots: true,
  });

  $('.slider-nav-thumbnails').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider',
    focusOnSelect: true,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    centerMode: true,
    responsive: [{
      breakpoint: 480,
      settings: {
        centerMode: false,
      }
    }]
  });


  // Search Toggle
  $("#search_input_box").hide();
  $("#search_1").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $("#close_search").on("click", function () {
    $('#search_input_box').slideUp(500);
  });

  //------- Mailchimp js --------//  
  function mailChimp() {
    $('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();

  //------- makeTimer js --------//  
  function makeTimer() {

    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
    var endTime = new Date("27 Sep 2019 12:56:00 GMT+01:00");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }

    $("#days").html("<span>Days</span>" + days);
    $("#hours").html("<span>Hours</span>" + hours);
    $("#minutes").html("<span>Minutes</span>" + minutes);
    $("#seconds").html("<span>Seconds</span>" + seconds);

  }
// click counter js
(function() {
 
  window.inputNumber = function(el) {

    var min = el.attr('min') || false;
    var max = el.attr('max') || false;

    var els = {};

    els.dec = el.prev();
    els.inc = el.next();

    el.each(function() {
      init($(this));
    });

    function init(el) {

      els.dec.on('click', decrement);
      els.inc.on('click', increment);

      function decrement() {
        var value = el[0].value;
        value--;
        if(!min || value >= min) {
          el[0].value = value;
        }
        
      }

      function increment() {
        
        var value = el[0].value;
       
        value++;
        if(!max || value <= max) {
          el[0].value = value++;
        }
      }
    }
  }
})();

//inputNumber($('.input-number'));


  setInterval(function () {
    makeTimer();
  }, 1000);

  // click counter js


  // var a = 0;
  // $('.increase').on('click', function(){
     
    

  //   console.log(  $(this).innerHTML='Product Count: '+ a++ );
  // });

 var product_overview = $('#vertical');
 if(product_overview.length){
  product_overview.lightSlider({
    gallery:true,
    item:1,
    verticalHeight:450,
    thumbItem:4,
    slideMargin:0,
    speed:600,
    autoplay: true,
    responsive : [
      {
          breakpoint:991,
          settings: {
              item:1,
            }
      },
      {
          breakpoint:576,
          settings: {
              item:1,
              slideMove:1,
              verticalHeight:350,
            }
      }
  ]
  });
 }

 

 $('.sub-menu ul').hide();
 $(".sub-menu a").click(function () {
   $(this).parent(".sub-menu").children("ul").slideToggle("100");
   $(this).find(".right").toggleClass("ti-plus ti-minus");
 });

 if ($('.new_arrival_iner_').length > 0) {
  var containerEl = document.querySelector('.new_arrival_iner');
  var mixer = mixitup(containerEl);
 }
//  $('.controls').on('click', function(){
//   $('.controls').removeClass('add');
//   $('.controls').addClass('add');
//  });

 $('.controls').on('click', function(){
  $(this).addClass('active').siblings().removeClass('active');
 }); 




$(document).on("click",".input-number-decrement", function(event) {
    var cart_prod_id = $(this).parent().attr('id');
    var oldValue = Number( $('#'+cart_prod_id+' input').val() );
    //console.log(oldValue);
    if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
        $('#'+cart_prod_id+' input').val( newVal );
        
        var precio = $('#precio-'+cart_prod_id).attr('rel');
        //console.log( precio );
        var precio_cantidad = precio*newVal;
        $('#total-'+cart_prod_id).html( precio_cantidad );

        var subtotal = 0;
        $("#lista-compra tbody tr").each(function (index) {
            var tr_id = $(this).attr('id').replace('id-','');
            var precio = $('#precio-cart-prod-'+tr_id).attr('rel');
            var cantidad = Number( $('#cart-prod-'+tr_id+' input').val() );
            
            subtotal = subtotal + (precio*cantidad);
        });
        $('#subtotal').html( subtotal );
        //
        var total = subtotal;
        if ($('#envio').is(':checked')) {
            total = total + 100;
        }
        $('#total').html( total );

        var productos = Number($('#productos').val());
        var v_productos = productos - 1;
        $('#productos').val( Number(v_productos ));
        $('body').append('<style>.main_menu .cart i:after {content: "'+v_productos+'";}</style>');
    } else {
        $('#total-'+cart_prod_id).html( '0' );
    }
});

$(document).on("click",".input-number-increment", function(event) {
    var cart_prod_id = $(this).parent().attr('id');
    var oldValue = Number( $('#'+cart_prod_id+' input').val() );
    //console.log(oldValue);
    var newVal = parseFloat(oldValue) + 1;
    $('#'+cart_prod_id+' input').val( newVal );

    var precio = $('#precio-'+cart_prod_id).attr('rel');
    //console.log( precio );
    var precio_cantidad = precio*newVal;
    $('#total-'+cart_prod_id).html( precio_cantidad );

    var subtotal = 0;
    $("#lista-compra tbody tr").each(function (index) {
        var tr_id = $(this).attr('id').replace('id-','');
        var precio = $('#precio-cart-prod-'+tr_id).attr('rel');
        var cantidad = Number( $('#cart-prod-'+tr_id+' input').val() );
        
        subtotal = subtotal + (precio*cantidad);
    });
    $('#subtotal').html( subtotal );
    //
    var total = subtotal;
    if ($('#envio').is(':checked')) {
        total = total + 100;
    }
    $('#total').html( total );
                
    var productos = Number($('#productos').val());
    var v_productos = productos + 1;
    $('#productos').val( Number(v_productos ));
    $('body').append('<style>.main_menu .cart i:after {content: "'+v_productos+'";}</style>');
});



}(jQuery));




function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -27.402520, lng: -55.942614},
      zoom: 13
    });
    var input = document.getElementById('direccion');
    //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
    });

    autocomplete.addListener('place_changed', function() {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            window.alert("Seleccione una direccion de la lista para optenerla en el mapa");
            return;
        }
  
        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
        }
        marker.setIcon(({
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(35, 35)
        }));
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
    
        var address = '';
        if (place.address_components) {
            address = [
              (place.address_components[0] && place.address_components[0].short_name || ''),
              (place.address_components[1] && place.address_components[1].short_name || ''),
              (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }
    
        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
        infowindow.open(map, marker);
      
        // Location details
        for (var i = 0; i < place.address_components.length; i++) {
            if(place.address_components[i].types[0] == 'postal_code'){
                document.getElementById('postal_code').innerHTML = place.address_components[i].long_name;
            }
            if(place.address_components[i].types[0] == 'country'){
                document.getElementById('country').innerHTML = place.address_components[i].long_name;
            }
        }
        document.getElementById('location').innerHTML = place.formatted_address;
        document.getElementById('lat').innerHTML = place.geometry.location.lat();
        document.getElementById('lon').innerHTML = place.geometry.location.lng();

        document.getElementById("maps").value = place.geometry.location.lat() + ", " + place.geometry.location.lng();
    });
}