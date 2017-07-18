var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
 
    this.model.on('change', this.render, this);
  },
  
  events: {
    'click .video-list-entry-title': 'handleClick'
  },
  
  handleClick: function() {
    this.model.select();
  },

  //Original Below
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.el;
  },
  
  //Original Below
  template: templateURL('src/templates/videoListEntry.html')

});
