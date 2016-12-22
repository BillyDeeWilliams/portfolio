'use strict';


function Project (opts) {
  // for (key in opts) {
  //   this[key] = opts[key];
  // }
};

Project.projects = [];

Project.prototype.toHtml = function() {
  var source = $('#project-template').html();
  var template = Handlebars.compile(source);

  var html = template(this);

  return html;
};

Project.prepareData = function (){
  ourLocalData.forEach(function(projectObject) {
    Project.projects.push(new Project(projectObject));
  });

  Project.projects.forEach(function(ourNewProjectObject){
    $('#projects').append(ourNewProjectObject.toHtml());
  });
};
