GP.Views.GistShowView = Backbone.View.extend({
  events:{
    "click button.favorite": "favorite",
    "click button.unfavorite": "unfavorite"
  },
  render: function() {
    var that = this;
    var renderedContent = JST["gists/show"]({
      gist: that.model
    });
    that.$el.html(renderedContent);
    var renderedFiles = new GP.Views.GistFilesView({
      model: that.model
    })
    that.$el.append(renderedFiles.render().$el);
    return that;
  },

  favorite: function(evt){
    var that = this;
    var evt = evt;
    var gist_id = parseInt($(evt.target).attr("data-id"));
    console.log("gist"+ gist_id)
    var user_id = GP.Store.UserId;
    console.log("user"+user_id)
    var fav = new GP.Models.UserFavorite();
    // fav.set({user_id: user_id, gist_id: gist_id});
    fav.save({user_id: user_id, gist_id: gist_id}, {
      success: function(){
        GP.Store.UserFavorites.add(fav);
        $(evt.target).toggleClass("favorite unfavorite").html("Unfavorite");
      }
    });
    console.log("i think this worked...");
  },

  unfavorite: function(evt) {
    var gist_id = parseInt($(evt.target).attr("data-id"));
    var user_id = GP.Store.UserId;
    var unfav = GP.Store.UserFavorites.findWhere({user_id: user_id, gist_id: gist_id});
    unfav.destroy({success: function() {
      console.log("destroyed")
      $(evt.target).toggleClass("favorite unfavorite").html("Favorite!");
    }});
  }

});