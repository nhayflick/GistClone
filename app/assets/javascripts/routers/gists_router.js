GP.Routers.GistsRouter = Backbone.Router.extend({

  initialize: function($rootEl) {
    this.$rootEl = $rootEl;
  },

  routes: {
    "": "index",
    "gists/:id": "show"
  },

  index: function() {
    var that = this
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
  }


});