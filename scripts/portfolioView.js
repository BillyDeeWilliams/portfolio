'use strict';
var articleView = {};

articleView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab').show();
    $(this).hide();

    var content = $(this).attr('data-content');

    $('.tab-content').hide();
    $('#' + content).fadeIn(3000);
  });

  $('.main-nav .tab:first').click();
};
articleView.handleMainNav();
