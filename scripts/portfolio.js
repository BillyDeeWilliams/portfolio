'use strict';
var projects = [];

function Project (opts) {

  this.title = opts.title;
  this.category = opts.category;
  this.screenshot = opts.screenshot;
  this.colaborators = opts.colaborators;
  this.url = opts.url;
  this.sourceUrl = opts.sourceUrl;
  this.deployedOn = opts.deployedOn;
  this.description = opts.description;
}

Project.prototype.toHtml = function() {
  var $newProject = $('div#projects').clone();
  //remove the class of template
  $newProject.removeClass('template');
  $newProject.attr('data-category', this.category);

  $newProject.find('h1').html(this.title);
  $newProject.find('img').html(this.screenshot);
  $newProject.find('.colaborators').html(this.colaborators);
  $newProject.find('a').attr('href', this.url);
  $newProject.find('time[pubdate]').attr('pubdate', this.deployedOn).html(this.deployedOn);
  $newProject.find('p.live').html('<p>Live for <br>' + parseInt((new Date() - new Date(this.deployedOn)) / 60 / 60 / 24 / 1000 ) + '<br> days');
  $newProject.find('div.description').html(this.description);
  return $newProject;
};
//sort newst to oldest
ourLocalData.sort(function(curElem, nextElem) {
  return (new Date(nextElem.deployedOn)) - (new Date(curElem.deployedOn));
});
//push in array
ourLocalData.forEach(function(projectData) {
  projects.push(new Project(projectData));
});
//render each element in the array
projects.forEach(function(projectObject) {
  $('#projects').append(projectObject.toHtml());
});
