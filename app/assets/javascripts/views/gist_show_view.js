GP.Views.GistShowView = Backbone.View.extend({
  events:{
    "click button.favorite": "favorite",
    "click button.unfavorite": "unfavorite"
  },
  render: function() {
    var that = this
    var renderedContent = JST["gists/show"]({
      gist: that.model
    });
    that.$el.html(renderedContent);
    return that;
  },

  favorite: function(evt){
    gist_id = parseInt($(evt.target).attr("data-id"));
    console.log("gist"+gist_id)
    user_id = GP.Store.UserId;
    console.log("user"+user_id)
    var fav = new GP.Models.UserFavorite();
    fav.set({user_id: user_id, gist_id: gist_id});
    fav.save();
    console.log("i think this worked...");
  },

  unfavorite: function() {

  }

});