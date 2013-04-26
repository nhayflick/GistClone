GP.Routers.GistsRouter = Backbone.Router.extend({

  initialize: function($rootEl) {
    this.$rootEl = $rootEl;
  },

  routes: {
             "": "index",
    "gists/new": "new",
    "gists/:id": "show"
  },

  index: function() {
    var that = this;
    var listView = new GP.Views.GistsListView({
      collection: GP.Store.Gists
    });
    that.$rootEl.html(listView.render().$el);
  },

  show: function(id) {
    var that = this;
    var showView = new GP.Views.GistShowView({
      model: GP.Store.Gists.get(id)
    })
    that.$rootEl.html(showView.render().$el);
  },

  new: function() {
    var that = this;
    var gist = new GP.Models.Gist({user_id: GP.Store.UserId});
    // _(3).times(function(){
    //   gist.get("gist_files").add(new GP.Models.GistFile());
    // });
    console.log(gist);
    console.log(gist.get('gist_files'));
    var newView = new GP.Views.NewGistView({
      model: gist
    });
    that.$rootEl.html(newView.render().$el);
  }

});