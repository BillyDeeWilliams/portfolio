'use strict';
var projects = [];

function Project (opts) {
  // for (key in opts) {
  //   this[key] = opts[key];
  // }
};

Project.prototype.toHtml = function() {
  var source = $('#project-template').html();
  var template = Handlebars.compile(source);

  var html = template(this);

  return html;
};

ourLocalData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(ourNewProjectObject){
  $('#projects').append(ourNewProjectObject.toHtml());
});
