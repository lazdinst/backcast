var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    //This Initialized tag is janky, need to find more appropriate solution
    this.collection.on('sync', this.render, this);
  },

  renderVideo: function(videos) {
    for (var i = 0; i < 5; i ++) {
      var videoListEntryView = new VideoListEntryView({model: videos[i]});
      $('.video-list').append(videoListEntryView.render());      
    }
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    $('.video-list').empty();
    //If not initialized, render videos for the first time.
    this.renderVideo(this.collection.models);

    return this;
  },  

  //Original Below
  template: templateURL('src/templates/videoList.html')
});

