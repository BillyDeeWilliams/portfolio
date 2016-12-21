'use strict';
var articleView = {};

articleView.handleMainNav = function () {
  console.log('CLICK on NAV!');

  var check1 = $('.main-nav .tab');
  var main = $('.main-nav');
  var tab = $('.tab');
  console.log(check1);
  console.log( main);
  console.log( tab);
  $('.main-nav').on('click', '.tab', function() {

    $('.tab').show();
    $(this).hide();

    var content = $(this).attr('data-content');
    console.log(content);

    $('.tab-content').hide();
    $('#' + content).fadeIn(3000);
  });

  $('.main-nav .tab:first').click();
};

articleView.handleMainNav();
