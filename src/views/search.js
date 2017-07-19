var SearchView = Backbone.View.extend({
  
  events: {
    'click button' : 'handleSearchButton'
    //enter is pressed
  },
  
  handleSearchButton: function() {
    var q = this.$('.form-control').val();
    this.collection.search(q);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
