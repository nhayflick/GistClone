GP.Views.GistsListView = Backbone.View.extend({
  tagName: 'ul',
  className: "gist-list",
  initialize: function() {
    var that = this;

    var renderCallback = that.render.bind(that);
    that.collection.on("add", renderCallback);
    that.collection.on("change", renderCallback);
    that.collection.on("remove", renderCallback);
  },

  render: function(){
    var that = this;

    var renderedContent =JST['gists/list']({
      gists: that.collection

    });



    that.$el.html(renderedContent);
    return that;
  }
});