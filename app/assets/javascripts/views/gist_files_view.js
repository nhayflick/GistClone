// new GistFilesView({model : gist });

GP.Views.GistFilesView = Backbone.View.extend({
  tagName: "ul",
  className: "gist-files-list",

  render: function(){
    var that = this;


    // console.log(that.model.get("gist_files"))

    that.model.get("gist_files").fetch({
      success: function(a, b, c){
        console.log(a);
        console.log(b);
        // console.log(that.model.get("gist_files"));
        var renderedContent = JST["gistfiles/list"]({
          gist_files: that.model.get("gist_files")
        });
        that.$el.html(renderedContent)
      }
    });

    return that;

  }
});