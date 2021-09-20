console.log('desdsds');

var search = document.location.search.substr(1).split('&');
var ref = 'no_ref';
var subid = '';
var email = '';
var cid = '';
var source = '';
if (typeof search === 'object') {
  search.forEach(function (parameter) {
    var u = parameter.split('=');
    switch (u[0]) {
      case 'ref':
        ref = u[1];
        break;

      case 'subid':
        subid = u[1];
        break;

      case 'email':
        email = u[1];
        break;
      case 'cid':
        cid = u[1];
        break;
      case 'source':
        source = u[1];
        break;
    }
  });
}

today = moment().subtract('1', 'd').format('dddd, MMMM Do YYYY');
tomorrow = moment().add(1, 'd').format('dddd, MMMM Do YYYY');
todayPlus2 = moment().add(2, 'd').format('dddd, MMMM Do YYYY');
todayPlus3 = moment().add(3, 'd').format('dddd, MMMM Do YYYY');

var deliveryTime = '';
var parcelLocation = '';
var numberQ = 0;
$('.question').html(numberQ);

function changeQ() {
  numberQ++;
  switch (numberQ) {
    case 1:
      $('.question').html(
        '<strong>Quand souhaitez-vous programmer la livraison de votre colis ?</strong>'
      );
      $('#q1').children('span').html(tomorrow);
      $('#q2').children('span').html(todayPlus2);
      $('#q3').children('span').html(todayPlus3);
      break;
    case 2:
      $('.question').html(
        '<strong>Où souhaitez-vous que votre colis soit déposé ?</strong>'
      );
      $('#q1').children('span').html('À la maison');
      $('#q2').children('span').html('Au travail');
      $('#q3').children('span').html('Chez un voisin');
      break;
  }
  if (numberQ === 3) {
    finalP();
  }
}

function finalP() {
  parcelLocation = parcelLocation.toLocaleLowerCase();
  $('.deliveryTime').text(deliveryTime);
  $('.parcelLocation').text(parcelLocation);
  $('.main4').fadeOut(200);
  setTimeout(function () {
    $('.main5').fadeIn(200);
  }, 200);
}

$(document).ready(function () {
  $('.reschedule').click(function () {
    $(this).html('<i class="fa fa-spin fa-sync"></i>');
    setTimeout(function () {
      $('.main1').fadeOut(200);
      setTimeout(function () {
        $('.main2').fadeIn(200);
      }, 200);
      setTimeout(function () {
        $('.main2').css('display', 'none');
        $('.main3').fadeIn(200);
      }, 4000);
    }, 500);
  });
  $('.questions').click(function () {
    $(this).html('<i class="fa fa-spin fa-sync"></i>');
    setTimeout(function () {
      $('.main3').css('display', 'none');
      $('.main4').fadeIn(200);
      changeQ();
    }, 500);
  });
  $('.question__answers label').click(function () {
    if (numberQ === 1) {
      deliveryTime = $(this).text();
    } else if (numberQ === 2) {
      parcelLocation = $(this).text();
    }
    setTimeout(function () {
      changeQ();
    }, 100);
  });
  $('.final').click(function () {
    $(this).html('<i class="fa fa-spin fa-sync"></i>');
  });
});


