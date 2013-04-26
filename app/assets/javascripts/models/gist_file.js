GP.Models.GistFile = Backbone.RelationalModel.extend({
  urlRoot: '/gist_files',

  schema: {
    body: 'Text'
  }
});