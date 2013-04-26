GP.Collections.GistFiles = Backbone.Collection.extend({

  model: GP.Models.GistFile,

  initialize: function(models, options){
    this.gist = options.gist;
  },

  url: function(){
    return '/gists/'+ this.gist.id + "/gist_files";
  }

});