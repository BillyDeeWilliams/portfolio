'use strict';
var articleView = {};

articleView.handleMainNav = function () {
  //
  $('li[data-content="home"]').on('click', function(){
  // $('.main-nav').on('click', '.tab', function() {
  //   $('.tab').show();
  //   $(this).hide();
  //   console.log('this.attr ', $(this).attr());
    // $('.tab').show();
    // $(this).hide();

    // var content = $(this).attr('data-content');
    //
    // $('.tab-content').hide();
    // $('#' + content).fadeIn(3000);

    // show the whole nav bar but hide the tab for the current tab
    $(this).parent().find($('li')).show();
    $(this).hide();
    // hide all the content not corresponding to the tab
    $('#about').hide();
    $('#portfolio').hide();
    $('#resume').hide();
    $('#contact').hide();
    $('#home').show();
  });

  $('li[data-content="about"]').on('click', function(){
    $(this).parent().find($('li')).show();
    $(this).hide();
    $('#portfolio').hide();
    $('#resume').hide();
    $('#contact').hide();
    $('#about').show();
  });
  $('li[data-content="portfolio"]').on('click', function(){
    $(this).parent().find($('li')).show();
    $(this).hide();
    $('#about').hide();
    $('#resume').hide();
    $('#contact').hide();
    $('#portfolio').show();
  });
  $('li[data-content="resume"]').on('click', function(){
    $(this).parent().find($('li')).show();
    $(this).hide();
    $('#about').hide();
    $('#portfolio').hide();
    $('#contact').hide();
    $('#resume').show();
  });
  $('li[data-content="contact"]').on('click', function(){
    $(this).parent().find($('li')).show();
    $(this).hide();
    $('#about').hide();
    $('#portfolio').hide();
    $('#resume').hide();
    $('#contact').show();
  });
  //$('.main-nav .tab:first').click();
};
articleView.handleMainNav();
