GP.Models.Gist = Backbone.RelationalModel.extend({
  urlRoot: "/gists",

  relations: [{
    type: Backbone.HasMany,
    key: 'gist_files',
    keyDestination: 'gist_files_attributes',
    relatedModel: "GP.Models.GistFile",
    collectionType: "GP.Collections.GistFiles",

    collectionOptions: function (gist) {
      return { gist: gist};
    },

    reverseRelation: {
      key: "gist",
      keySource: "gist_id",
      includeInJSON: "id"
    }
  }],

  schema: {
    title : 'Text'
  },


});