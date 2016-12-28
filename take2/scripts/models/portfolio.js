'use strict';
(function(module){



  function Project (opts) {
    for (key in opts) {
      this[key] = opts[key];
    }
  };

  Project.projects = [];

  Project.prototype.toHtml = function() {
    var source = $('#project-template').html();
    var template = Handlebars.compile(source);

    var html = template(this);

    return html;
  };

  Project.prepareData = function (){
    Project.projects = ourLocalData.map(function(project) {
      return new Project(project);
    });

    Project.projects.forEach(function(ourNewProjectObject){
      $('#projects').append(ourNewProjectObject.toHtml());
    });
  };

  module.Project = Project;
})(window);
