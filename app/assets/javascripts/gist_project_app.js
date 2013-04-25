window.GP = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Store: {},

  initialize: function($contentEl, $sidebar, gists, user_id, fav_gists) {
    GP.Store.UserId = user_id;
    var that = this;
    GP.Store.Gists = new GP.Collections.Gists(gists);
    GP.Store.UserFavorites = new GP.Collections.UserFavorites(fav_gists);
    new GP.Routers.GistsRouter($contentEl);
    that.installLogout($sidebar);
    Backbone.history.start();
  },

  installLogout: function($sidebar){
    var logoutView = Backbone.View.extend({
      tagName: "button",
      className: "logout",

      events: {
        "click": "logout"
      },

      logout: function(){

          $.ajax({
              url: '/session',
              type: 'DELETE',
              success: function(result) {
                  location.reload();
              },
              error: function(result) {
                  console.log("error");
              }
          });

      },

      render: function(){
        var that = this;

        var renderedContent = "logout";



        that.$el.html(renderedContent);
        return that;
      }
    });
      var lView = new logoutView();
      $sidebar.html(lView.render().$el);
    }

}