var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    
  },


  render: function() {
    this.$el.html(this.template());
    var videoPlayerView = new VideoPlayerView({collection: this.videos});
    var videoListView = new VideoListView({collection: this.videos});
    return this;
  },

  template: templateURL('src/templates/app.html')

});
