GP.Views.NewGistView = Backbone.View.extend({

  initialize: function() {
    this.form = new Backbone.Form({
      model: this.model
    });
    // this.files = this.model.get("gist_files");
    this.subforms = [];
  },

  events: {
    'click button.submit': "submitForm",
    'submit form': "preventSubmit",
    'click button.add_form': 'addForm'
  },

  render: function(){
    var that = this;
    that.form.render();
    that.$el.append(that.form.el);

    // that.files.each(function(file) {
 //      var subform = new Backbone.Form({ model: file });
 //      that.subforms.push(subform);
 //      subform.render();
 //      that.$el.append(subform.el);
 //    });
   that.$el.append($("<button class='add_form'> Add Gist File </button>"));
    that.$el.append($("<button class='submit'> Submit </button>"));
    return that;
  },

  preventSubmit: function(event){
    event.preventDefault();
  },

  submitForm: function(){
    var that = this;
    that.form.commit();
    _.each(that.subforms, function(subform){
      subform.commit();
    });
    //GP.Store.GistFiles = that.model.get("gist_files");

    that.model.save(
      // function() {
//         Backbone.history.navigate('/');
//       }
    );
  },

  addForm: function(){
    var that = this;
    if (this.subforms.length < 3){
      var emptyForm = new GP.Models.GistFile();
      that.model.get('gist_files').add(emptyForm);
      var newSubForm = new Backbone.Form({model: emptyForm});
      newSubForm.render();
      that.$el.append(newSubForm.el);
      that.subforms.push(newSubForm);
    }

  }


});