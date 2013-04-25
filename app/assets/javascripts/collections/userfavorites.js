GP.Collections.UserFavorites = Backbone.Collection.extend({
  model: GP.Models.UserFavorite,
  url: "/user_favorites"
});